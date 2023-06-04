import { Calculator,ValidOperations, DECIMAL_FIXED_SIZE } from "./calculator_class.js";

export class Advanced_calculator extends Calculator{
    constructor(){
        super();
        this.canBePermamentlySolved = false;
    }
    renderResult(){
        document.getElementById('previous-adv').innerHTML = this.previousString;
        document.getElementById('current-adv').innerHTML = Number(Number(this.solution).toPrecision(DECIMAL_FIXED_SIZE));
        return this;
    }
    renderDisplay(){
        document.getElementById('previous-adv').innerHTML = this.previousString;
        document.getElementById('current-adv').innerHTML = this.currentString;
    }
    equalOperation(){
        if (this.canBePermamentlySolved === true){
            let tmpArray = this.previousString.split(" ");
            if (tmpArray.length === 1){
                this.solution = this.doMathForOperation(this.currentString, 0, "+");
                this.previousString += " " + this.currentString;
                this.canBePermamentlySolved = false;
            }
            else{
                this.previousString += " " + this.currentString;
                this.SolveEquation();   
            }
           
        }
        else
        // this.doMathForOperation();
        {
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
        }
        this.previousString += ' =';
        this.renderResult();
    }
    exponent(number, n){
        if (n === -1){
            n = 2;
        }
        return Number(number) ** n;
    }
    addExponent(){
        if(this.currentString != "" && this.currentString.indexOf(/\d/)){
            this.currentString += "^";
            this.canBePermamentlySolved = true;
            this.renderDisplay();
        }
        return this;
    }
    sqrt(number){
        return Math.sqrt(number);
    }
    // √
    addSqrt(){
        if (this.currentString !== ""){
            this.currentString = '√' + this.currentString; // maybe add space after * 
            this.addCurrentOperation("*");
            // this.currentString = "";
        }
        else
            this.currentString = '√' + this.currentString;{
            this.canBePermamentlySolved = true;
            }
        this.renderDisplay()
    }
    addFactorial(){
        if (this.currentString.includes("!") || this.currentString === "" && this.currentString.indexOf(/\d/) === -1){
            return this;
        }
        this.currentString += "!";
        this.needsMathOperation = true;
        this.canBePermamentlySolved = true;
        this.renderDisplay();
    }
    factorial(number){
        number = Math.floor(number);
        if (number < 0)
            console.error("Only positive errors");
        else if (number == 0) 
            return 1;
        else 
            return (number * this.factorial(number - 1));
    }
    doExtendedMathOperation(operation, str){ 
        let number;
        let lastDigit = 0;
        lastDigit = str.search(/[%!)]/);
        let first = str.search(/\d/);
        switch (operation) {
            case "^":
                let numberAndExponent = str.split("^");
                if (lastDigit === -1)
                    return str.slice(0, first) + String (this.exponent((numberAndExponent[0] === "" ? 2 : Number(numberAndExponent[0].slice(first))), Number(numberAndExponent.length === 2 ? numberAndExponent[1].slice(lastDigit === -1 ? 0 : lastDigit - 1) : -1))) ;
                else
                    return str.slice(0, first) + String (this.exponent((numberAndExponent[0] === "" ? 2 : Number(numberAndExponent[0].slice(first))), Number(numberAndExponent.length === 2 ? numberAndExponent[1].slice(lastDigit === -1 ? 0 : lastDigit - 1) : -1))) + str.slice(lastDigit) ;

            case "√":
                if (first === -1)
                    return 1;
                if (lastDigit === -1){
                    number = str.slice(str.indexOf('√') + 1)
                    return this.sqrt(number);
                }
                else{
                    number = str.slice(str.indexOf('√') + 1, lastDigit);
                    return this.sqrt(number) + str.slice(lastDigit);
                }
                case "%":
                number = (Number(str.slice(0, str.indexOf("%"))) / 100);
                return number + str.slice(str.indexOf("%") + 1);
            case "!":
                number = this.factorial(Number(str.slice(0, str.indexOf("!"))));
                return number + str.slice(str.indexOf("!") + 1);
            default:
                break;
        }
    }
    doMathForOperation(left, right, operation) {
        left = String(left);
   
        while(isNaN(Number(left))){
            for (let i = 0; i < String(left).length; i++){
            if (isNaN(Number(left[i])) && left[i] !== '.'){
                left = this.doExtendedMathOperation(left[i], left);
                break;
            }
        }
        
        }
        while(isNaN(Number(right))){
            for (let i = 0; i < String(right).length; i++){
            if (isNaN(Number(right[i])) && right[i] !== '.'){
                right = this.doExtendedMathOperation(right[i], right);
                break;
            }
        }
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
   
            default:
                // throw new UnknownOperation("We can`t handle it :(");
                return 0;
        }
    }
    clearAll(){
        this.previousString = "";
        this.currentString = "";
        this.canBePermamentlySolved = false;
        this.needsMathOperation = false;    
        this.renderDisplay();
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
        else if (operation === "C"){
            this.clearAll();
            return this;
        }
        else if (operation === "n!"){
            this.addFactorial();
            return this;
        }
        else if (operation === "x^n"){
            this.addExponent();
            return this;
        } 
        else if (operation === "sqrt"){
            this.addSqrt();
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
}