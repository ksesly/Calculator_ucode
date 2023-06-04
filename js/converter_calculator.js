import { Calculator, DECIMAL_FIXED_SIZE } from "./calculator_class";

class Converter_Calculator extends Calculator {
    constructor(){
        super();
        this.typeConvertation = 0; // 0 - length, 1 - speed, 2 - weight
        this.currentNumber = "";
        this.currentValue = 0; // Number current/future for display, this is for math
        this.futureNumber = "";
        this.from = ""; // from what convert
        this.to = ""; // to what convert
    }
    changeType(type){
        switch (type) {
            case 0:
                this.typeConvertation = 0;
                break;
            case 1:
                this.typeConvertation = 1;
                break;
            case 2:
                this.typeConvertation = 2;
                break;
            default:
                break;
        }
    }
    renderDisplay(){
        this.convertFrom()
        this.converTo()
        document.getElementById('previous').innerHTML = this.currentNumber;
        document.getElementById('current').innerHTML = this.futureNumber;
    }
    convertFrom(){

        let divider = 1;
        if (this.typeConvertation === 0){
        switch (this.from) {
            case "kilometr":
                divider = 1000000;
                break;
            case "metr":
                divider = 1000;
                break;
            case "cm":
                divider = 10;
                break;
            default:
                break;
        }
    }
    else if (this.typeConvertation === 2){
        switch (this.from) {
            case "tonn": 
                divider = 1000 * 1000;
                break;
            case "kg":
                divider = 1000;
                break;
            default:
                break;
        }
    }
    else{
        switch (this.from) {
            case "km/h":
                divider = 3.6;                
                break;
        
            default:
                break;
        }
    }
        this.currentValue = Number((Number(this.currentNumber) / divider).toPrecision(DECIMAL_FIXED_SIZE));    
    }
    converTo(){
        let multi = 1;
        if (this.typeConvertation === 0){
        switch (this.to) {
            case "kilometr":
                multi = 1000000
                break;
            case "metr":
                multi = 1000;
                break;
            case "cm":
                multi = 10;
                break;
            default:
                break;
        }
    }
    else if (this.typeConvertation === 2){
        switch (this.from) {
            case "tonn": 
                multi = 1000 * 1000;
                break;
            case "kg":
                multi = 1000;
                break;
            default:
                break;
        }
    }
    else{
        switch (this.from) {
            case "km/h":
                divider = 3.6;                
                break;
        
            default:
                break;
        }
    }
        this.futureNumber = String(Number(Number(this.currentNumber * multi).toPrecision(DECIMAL_FIXED_SIZE)));
    }
    addToCurrentNumber(value){
        if (this.currentString.length > 16){ // number max is 9 007 199 254 740 991, so for now it will be slitly smaller
            return this; // ERROR !!!! make display that this is max
        }
        if (value == '.'){
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