export let ValidOperations = ['/', '*', '+', '-'];
export var DECIMAL_FIXED_SIZE = 8;
export class Calculator{
    constructor(){
        this.previousValue = 0;
        this.currentOperation = "";
        this.currentNegative = false;
        this.needsMathOperation = false;
        this.previousString = "";
        this.currentString = "";
        this.solution = 0;
        // make back-up version of prevValue for changing operations
    }
  
    renderResult(){
        document.getElementById('previous').innerHTML = this.previousString;

        document.getElementById('current').innerHTML = Number(Number(this.solution).toPrecision(DECIMAL_FIXED_SIZE));
        return this;
    }
    // 123+|222|=
    equalOperation(){
        // this.doMathForOperation();
        if (!/[+-/*]/.test(this.previousString) || this.currentString === "")
            return this;
        if (this.previousString.includes("=")){ // each click on = will repeat last action (a + b = c) mean +b every click
            let tmpArray = this.previousString.split(" ");

            this.solution = this.doMathForOperation(String(this.solution) ,tmpArray[tmpArray.length - 2] ,tmpArray[tmpArray.length - 3]);
            this.renderResult();
            return this;
        }
        this.previousString += " " + this.currentString;
        this.SolveEquation();
        this.previousString += ' =';
        console.log("SOLUTION",this.solution);
        this.renderResult();
    }
    
    renderDisplay(){
        document.getElementById('previous').innerHTML = this.previousString;
        document.getElementById('current').innerHTML = this.currentString;
    }
    addToCurrentNumber(value){
        if(this.currentString === "" && value === "0")
            return this;
        if (this.currentString.length > 16){ // number max is 9 007 199 254 740 991, so for now it will be slitly smaller
            return this; // ERROR !!!! make display that this is max
        }
        if (this.needsMathOperation === false){
            if (this.currentString.includes("%"))
                // throw new Error("You can`t do it!");
                return this;
    

            if (this.previousString.includes("=")){
                this.clearAll();
            }
            else if (value == '.'){
                if (this.currentString === ''){
                    this.currentString += '0.';
                }
                else if (this.currentString.includes('.')){
                    // throw new ExtraDecimal("One decimal per number");
                    return this;
                }
                else
                    this.currentString += value;
            }
            else
                this.currentString += value;

            this.renderDisplay();
            return this;
    }
    }
    // operation mast be String !!!
    addCurrentOperation(operation){
        if (this.previousString.includes("=") && !["CE"].includes(operation)){ //case when we have 25 + 5 = 30 and want
            this.previousString = String(this.solution);                      // to continue using answer in math
            this.currentString = "";
            if (operation === "%"){
                this.previousString += "%";
                this.needsMathOperation = true;
                this.renderDisplay()
                return;
            }
            if (operation === "+/-"){
                this.previousString = "(-" + this.previousString + ")";
                this.needsMathOperation = true;
                this.renderDisplay()
                return;
            }
            this.renderDisplay();
        }
        if (!this.previousString.includes("=") && operation === "%"){
            this.addPersentage();
            return this;
        }
        if (!this.previousString.includes("=") && operation === "+/-"){
            if (this.needsMathOperation)
                return this;
            this.negative();
            this.needsMathOperation = false;
            return this;
        }
        if (operation === "CE"){
            if (!this.previousString.includes("="))
                this.clearCurrent();
            return this;
        }
        if (operation === "C"){
            this.clearAll();
            return this;
        }

        if (ValidOperations.indexOf(operation) === -1)
            // throw new UnknownOperation("Jopa, we dont handle this operation");
            return this;
        
        else if (this.previousString === '' && this.currentString === '')
            // throw new Error("No, you cant add operation before any number!");   //comment: are u stupid?
            return this;
        if(this.needsMathOperation === true)
            this.needsMathOperation = false;

        if (this.currentString === '' && ValidOperations.indexOf(this.previousString[this.previousString.length - 1]) !== -1){ // case for changing operations
            this.currentOperation = operation;
            this.previousString = this.previousString.slice(0, -1) + operation;
        }
        else{
            if(this.currentNegative === true){
                this.currentString += ")";
                this.currentNegative = false;
            }
            if (this.previousString !== '') // to remove whiteSpaces from start
                this.previousString += " " + this.currentString + " " + operation;
                else{
                    this.previousString += this.currentString + " " + operation;
                }
            this.currentString = ""; 
            this.currentOperation = operation;
            }
      
        this.renderDisplay()
        return this;
    }

    SolveEquation(){
        let equationArray = this.previousString.split(" ").filter(word => word != "");
        equationArray = equationArray.map(element => element.includes("(") ? element.slice(1, -1) : element);
        console.log("HELLO", equationArray);
        while(equationArray.length !== 1){
            console.log(equationArray)

                let operation;
                if (equationArray.includes('*') || equationArray.includes('/')){
                    let multi = equationArray.indexOf('*');
                    let divide = equationArray.indexOf('/'); 
                    if (multi !== -1 && divide !== -1)
                        operation = multi < divide ? "*" : "/";

                    else
                        operation = multi !== -1 ? "*" : "/";
                }
                else{
                    let minus = equationArray.indexOf('-');
                    let plus = equationArray.indexOf('+');
                    if (minus !== -1 && plus !== -1)
                        operation = minus < plus ? "-" : "+";
                    else 
                        operation = minus !== -1 ? "-" : "+";
                }
                let left = equationArray[equationArray.indexOf(operation) - 1];
                let right = equationArray[equationArray.indexOf(operation) + 1];
                console.log(left,right);
                equationArray.splice(equationArray.indexOf(operation) - 1, 3, this.doMathForOperation(left, right, operation));
                continue;
                }
                
            this.solution = Number(equationArray[0]);
    }
    negative(){
        if(this.currentString.includes('(')){
            this.currentString = this.currentString.slice(2);
            this.currentNegative = false;
        }
        else{
            this.currentString = "(-" + this.currentString;
            this.currentNegative = true;
        }
        this.renderDisplay();

    }

    doMathForOperation(left, right, operation) {
        if (left.includes('%')){
            left =(Number(left.replace('%', '')) / 100).toPrecision(DECIMAL_FIXED_SIZE);
        }
        if (right.includes('%')){
            right = (Number(right.replace('%', '')) / 100).toPrecision(DECIMAL_FIXED_SIZE);
        }
        left = Number(left);
        right = Number(right);
        switch (operation) {
            case "+":
                return (left + right).toPrecision(DECIMAL_FIXED_SIZE);
            case "-":
                return (left - right).toPrecision(DECIMAL_FIXED_SIZE);
            case "*":
                return (left * right).toPrecision(DECIMAL_FIXED_SIZE);
            case "/":
                if(isFinite(left / right)) {
                    return (left / right).toPrecision(DECIMAL_FIXED_SIZE);
                }
                else
                    throw new ZeroDivision("You can`t divide to 0");
                    // return this;
            default:
                // throw new UnknownOperation("We can`t handle it :(");
                return 0;
        }
    }
    addPersentage(){
        if (this.currentString.includes('%')){
            // throw new Error("One Persentage per item!");
            return this;
        }
        else{
            if (this.currentString !== "")
                this.currentString +='%';
        this.renderDisplay();
        }
    }
    clearAll(){
        this.previousString = "";
        this.currentString = "";
        
        this.renderDisplay();
    }
    clearCurrent(){
        this.currentString = "";
        this.renderDisplay();
    }
}

