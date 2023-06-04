import { /*removeCalculator,*/ createBasicCalculator, createAdvancedCalculator, createConvertorCalculator } from "./creators.js";
import { Calculator } from "./calculator_class.js";
import { Advanced_calculator } from "./advanced_calculator.js"
createAdvancedCalculator();
createConvertorCalculator();
createBasicCalculator();

let calculator = new Calculator();
let advancedCalculator = new Advanced_calculator();

let whatClicked = document.querySelectorAll('.basic-table td'); 
Array.from(whatClicked).forEach(element => {
	element.addEventListener('click', () => {
		if (element.className == 'numbers') {
			calculator.addToCurrentNumber(element.id);
		}
		else if(element.hasAttribute('class', 'operations') &&element.id != '=' )
		    calculator.addCurrentOperation(element.id);
        
		else if(element.id == '=')
			calculator.equalOperation();
        
        else
			return 1;

	})
});

let whatAdvancedClicked = document.querySelectorAll('.ad-table td'); 
Array.from(whatAdvancedClicked).forEach(element => {
	element.addEventListener('click', () => {
		if (element.className == 'numbers') {
			advancedCalculator.addToCurrentNumber(element.id);
		}
		else if(element.hasAttribute('class', 'operations') && element.id != '=')
			advancedCalculator.addCurrentOperation(element.id);
        
		else if(element.id == '=')
			advancedCalculator.equalOperation();
        
        else
			return 1;

	})
});

// let whatConvertClicked = document.querySelectorAll('.ad-table td'); 
// Array.from(whatAdvancedClicked).forEach(element => {
// 	element.addEventListener('click', () => {
// 		if (element.className == 'numbers') {
// 			whatConvertClicked.addToCurrentNumber(element.id);
// 		}
// 		else if(element.hasAttribute('class', 'operations') && element.id != '=')
// 			whatConvertClicked.addCurrentOperation(element.id);
// 		else if(element.id == '=')
// 			whatConvertClicked.equalOperation();
        
//         else
// 			return 1;
// 	})
// });


let modes = document.querySelectorAll('.mode-chooser div');
modes.forEach(element => {
	element.addEventListener('click', () => {
		if(element.classList.contains('basic-button')) {
			document.getElementById('main-basic').style.visibility = 'visible';
			document.getElementById('main-adv').style.visibility = 'hidden';
			document.getElementById('main-convert').style.visibility = 'hidden';
			
		}
		else if(element.classList.contains('advanced-button')) {
			document.getElementById('main-adv').style.visibility = 'visible';
			document.getElementById('main-convert').style.visibility = 'hidden';
			document.getElementById('main-basic').style.visibility = 'hidden';
			
		}
		else if (element.classList.contains('convertor-button')) {
			document.getElementById('main-convert').style.visibility = 'visible';
			document.getElementById('main-adv').style.visibility = 'hidden';
			document.getElementById('main-basic').style.visibility = 'hidden';

		}
	})
})


let whatValuesClicked = document.querySelectorAll('.mode-chooser-values div');
whatValuesClicked.forEach(element => {
	element.addEventListener('click', () => {
		if (element.classList.contains('lenght-button')) {
			document.getElementById('length-output-div').style.visibility = 'visible';
			document.getElementById('weight-output-div').style.visibility = 'hidden';
			document.getElementById('time-output-div').style.visibility = 'hidden';
		}
		else if (element.classList.contains('weight-button')) {
			document.getElementById('length-output-div').style.visibility = 'hidden';
			document.getElementById('weight-output-div').style.visibility = 'visible';
			document.getElementById('time-output-div').style.visibility = 'hidden';
		}
		else if (element.classList.contains('time-button')) {
			document.getElementById('length-output-div').style.visibility = 'hidden';
			document.getElementById('weight-output-div').style.visibility = 'hidden';
			document.getElementById('time-output-div').style.visibility = 'visible';
		}
	})
})
