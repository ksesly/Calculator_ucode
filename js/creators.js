let symbolArrayBasic = ['%', 'CE', 'C', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='];
let symbolConvArray = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.'];
let symbolArrayAdvanced = ['%', 'CE', 'C', '/', 'x^n', 'sqrt', 'n!', '>.<', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='];
// let memoryArray =['MR', 'MC', 'M+', 'M-'];

export function createBasicCalculator() {
	// mode.basic = true;
	// mode.converter = false;
	// mode.advanced = false;
	let mainBasicDiv = document.createElement('div');
	mainBasicDiv.setAttribute('class', 'calculator');
	mainBasicDiv.id = 'main-basic';

	let modeChooser = document.createElement('div');
	modeChooser.setAttribute('class', 'mode-chooser');
	let outputField = document.createElement('div');
	outputField.setAttribute('class', 'output-div');
	let numberTableDiv = document.createElement('div');
	numberTableDiv.setAttribute('class', 'number-table-div');

	let modeConvertor = modeChooser.appendChild(document.createElement('div'));
	modeConvertor.setAttribute('class', 'convertor-button');
	modeConvertor.innerHTML = 'convertor';
	let modeBasic = modeChooser.appendChild(document.createElement('div'));
	modeBasic.setAttribute('class', 'basic-button');
	modeBasic.innerHTML = 'basic';
	modeBasic.style.backgroundColor = 'rgba(104, 115, 79, 1)';
	modeBasic.style.color = 'white';
	let modeAdvanced = modeChooser.appendChild(document.createElement('div'));
	modeAdvanced.setAttribute('class', 'advanced-button');
	modeAdvanced.innerHTML = 'advanced';

	// div with prev and current fields
	let calculationsField = outputField.appendChild(document.createElement('div'));
	calculationsField.setAttribute('class', 'calculations-div');
	let previousCalculationsField = calculationsField.appendChild(document.createElement('div'));
	let currentCalculationsField = calculationsField.appendChild(document.createElement('div'));
	
	// ------------id fot active fields!!------------(for mishka)
	previousCalculationsField.id = 'previous';
	currentCalculationsField.id = 'current';
	

	// div with memory functions, history and settings
	// let memoryAndSettingsDiv = outputField.appendChild(document.createElement('div'));
	// memoryAndSettingsDiv.setAttribute('class', 'mem-set-div');
	
	// let memoryDiv = memoryAndSettingsDiv.appendChild(document.createElement('div'));
	// for(let i = 0; i < 4; i++) {
	// 	let memDiv = memoryDiv.appendChild(document.createElement('div'));
	// 	memDiv.innerHTML = memoryArray[i];
	// 	memDiv.id = memoryArray[i];
	// 	switch (memDiv.innerHTML) {
	// 		case 'MR':
	// 			memDiv.id = 'MR';
	// 			break;
	// 		case 'MC':
	// 			memDiv.id = 'MC';
	// 			break;
	// 		case 'M+':
	// 			memDiv.id = 'Mplus';
	// 			break;
	// 		case 'M-':
	// 			memDiv.id = 'Mminus';
	// 			break;
	// 	}
	// }

	// let settingsHistoryDiv = memoryAndSettingsDiv.appendChild(document.createElement('div'));
	// memoryDiv.setAttribute('class', 'memory-div');
	
	
	// settingsHistoryDiv.setAttribute('class', 'settings-history-div');
	// let historyIcon = settingsHistoryDiv.appendChild(document.createElement('img'));
	// historyIcon.setAttribute('class', 'history-icon');
	// historyIcon.src = 'https://img.icons8.com/ios/50/time-machine--v1.png';
	
	// let settingsIcon = settingsHistoryDiv.appendChild(document.createElement('img'));
	// settingsIcon.setAttribute('class', 'settings-icon');
	// settingsIcon.src = 'https://img.icons8.com/ios/50/settings--v1.png';

	// table
	let numberTable = document.createElement('table');
	numberTable.setAttribute('class', 'basic-table');
	let tableBody = numberTable.appendChild(document.createElement('tbody'));
	
	for (let i = 0; i < 5; i++) {
		let tableRow = tableBody.appendChild(document.createElement('tr'));
		
		for (let j = 0; j < 4; j++) {
			let tableCell = tableRow.appendChild(document.createElement('td'));
			// tableCell.setAttribute('forListener', 'adv');
			tableCell.innerHTML = symbolArrayBasic[i * 4 + j]; 
			tableCell.id = symbolArrayBasic[i * 4 + j];

			// ------------id for operations!------------(for mishka)
			if (symbolArrayBasic[i * 4 + j] == '.' || !isNaN(symbolArrayBasic[i * 4 + j]))
				tableCell.setAttribute('class', 'numbers');
			else if (isNaN(symbolArrayBasic[i * 4 + j])) 
				tableCell.setAttribute('class', 'operations');
			
		}
	}
	

	numberTableDiv.appendChild(numberTable);
	mainBasicDiv.appendChild(modeChooser);
	mainBasicDiv.appendChild(outputField);
	mainBasicDiv.appendChild(numberTableDiv);

	document.body.appendChild(mainBasicDiv);
}   


export function createAdvancedCalculator() {
	let mainAdvancedDiv = document.createElement('div');
	mainAdvancedDiv.setAttribute('class', 'calculator');
	mainAdvancedDiv.id = 'main-adv';
	
	let modeChooser = document.createElement('div');
	modeChooser.setAttribute('class', 'mode-chooser');
	let outputField = document.createElement('div');
	outputField.setAttribute('class', 'output-div');
	let numberTableDiv = document.createElement('div');
	numberTableDiv.setAttribute('class', 'number-table-div');

	let modeConvertor = modeChooser.appendChild(document.createElement('div'));
	modeConvertor.setAttribute('class', 'convertor-button');
	modeConvertor.innerHTML = 'convertor';
	let modeBasic = modeChooser.appendChild(document.createElement('div'));
	modeBasic.setAttribute('class', 'basic-button');
	modeBasic.innerHTML = 'basic';
	let modeAdvanced = modeChooser.appendChild(document.createElement('div'));
	modeAdvanced.setAttribute('class', 'advanced-button');
	modeAdvanced.innerHTML = 'advanced';
	modeAdvanced.style.backgroundColor = 'rgba(104, 115, 79, 1)';
	modeAdvanced.style.color = 'white';
	// modeAdvanced.id = 'ab';


	let calculationsField = outputField.appendChild(document.createElement('div'));
	calculationsField.setAttribute('class', 'calculations-div');
	let previousCalculationsField = calculationsField.appendChild(document.createElement('div'));
	let currentCalculationsField = calculationsField.appendChild(document.createElement('div'));
	
	// ------------id fot active fields!!------------(for mishka)
	previousCalculationsField.id = 'previous-adv';
	currentCalculationsField.id = 'current-adv';
	

	// div with memory functions, history and settings
	// let memoryAndSettingsDiv = outputField.appendChild(document.createElement('div'));
	// memoryAndSettingsDiv.setAttribute('class', 'mem-set-div');
	
	// let memoryDiv = memoryAndSettingsDiv.appendChild(document.createElement('div'));
	// for(let i = 0; i < 4; i++) {
	// 	let memDiv = memoryDiv.appendChild(document.createElement('div'));
	// 	memDiv.innerHTML = memoryArray[i];
	// 	memDiv.id = memoryArray[i];
	// 	switch (memDiv.innerHTML) {
	// 		case 'MR':
	// 			memDiv.id = 'MR';
	// 			break;
	// 		case 'MC':
	// 			memDiv.id = 'MC';
	// 			break;
	// 		case 'M+':
	// 			memDiv.id = 'Mplus';
	// 			break;
	// 		case 'M-':
	// 			memDiv.id = 'Mminus';
	// 			break;
	// 	}
	// }

	// let settingsHistoryDiv = memoryAndSettingsDiv.appendChild(document.createElement('div'));
	// memoryDiv.setAttribute('class', 'memory-div');
	
	
	// settingsHistoryDiv.setAttribute('class', 'settings-history-div');
	// let historyIcon = settingsHistoryDiv.appendChild(document.createElement('img'));
	// historyIcon.setAttribute('class', 'history-icon');
	// historyIcon.src = 'https://img.icons8.com/ios/50/time-machine--v1.png';
	
	// let settingsIcon = settingsHistoryDiv.appendChild(document.createElement('img'));
	// settingsIcon.setAttribute('class', 'settings-icon');
	// settingsIcon.src = 'https://img.icons8.com/ios/50/settings--v1.png';

	// table
	let numberTable = document.createElement('table');
	numberTable.setAttribute('class', 'ad-table');
	let tableBody = numberTable.appendChild(document.createElement('tbody'));
	
	for (let i = 0; i < 6; i++) {
		let tableRow = tableBody.appendChild(document.createElement('tr'));
		
		for (let j = 0; j < 4; j++) {
			let tableCell = tableRow.appendChild(document.createElement('td'));
			// tableCell.setAttribute('forListener', 'adv');
			tableCell.innerHTML = symbolArrayAdvanced[i * 4 + j]; 
			tableCell.id = symbolArrayAdvanced[i * 4 + j];

			// ------------id for operations!------------(for mishka)
			if (symbolArrayAdvanced[i * 4 + j] == '.' || !isNaN(symbolArrayAdvanced[i * 4 + j]))
				tableCell.setAttribute('class', 'numbers');
			else if (isNaN(symbolArrayAdvanced[i * 4 + j])) 
				tableCell.setAttribute('class', 'operations');
			
		}
	}
	mainAdvancedDiv.appendChild(modeChooser);
	numberTableDiv.appendChild(numberTable);
	mainAdvancedDiv.appendChild(outputField);
	mainAdvancedDiv.appendChild(numberTableDiv);

	
	document.body.appendChild(mainAdvancedDiv);
}


export function createConvertorCalculator() {
	let mainConverterDiv = document.createElement('div');
	mainConverterDiv.setAttribute('class', 'calculator');
	mainConverterDiv.id = 'main-convert';

	let modeChooser = document.createElement('div');
	modeChooser.setAttribute('class', 'mode-chooser');
	let outputFieldConverter = document.createElement('div');
	outputFieldConverter.setAttribute('class', 'output-conv-div');
	let numberTableDiv = document.createElement('div');
	numberTableDiv.setAttribute('class', 'number-table-conv-div');


	let modeConvertor = modeChooser.appendChild(document.createElement('div'));
	modeConvertor.setAttribute('class', 'convertor-button');
	modeConvertor.innerHTML = 'convertor';
	modeConvertor.style.backgroundColor = 'rgba(104, 115, 79, 1)';
	modeConvertor.style.color = 'white';
	let modeBasic = modeChooser.appendChild(document.createElement('div'));
	modeBasic.setAttribute('class', 'basic-button');
	modeBasic.innerHTML = 'basic';
	let modeAdvanced = modeChooser.appendChild(document.createElement('div'));
	modeAdvanced.setAttribute('class', 'advanced-button');
	modeAdvanced.innerHTML = 'advanced';

	// for length
	let convertChooserLength = outputFieldConverter.appendChild(document.createElement('div'));
	convertChooserLength.setAttribute('class', 'mode-chooser-values');
	convertChooserLength.id ='length-output-div';
	let lenghtConvertLength = convertChooserLength.appendChild(document.createElement('div'));
	lenghtConvertLength.setAttribute('class', 'lenght-button');
	lenghtConvertLength.innerHTML = 'length';
	lenghtConvertLength.style.backgroundColor = 'rgba(104, 115, 79, 1)';
	lenghtConvertLength.style.color = 'white';
	lenghtConvertLength.id = 'len-conv-btn';
	let weigthConvertorLength = convertChooserLength.appendChild(document.createElement('div'));
	weigthConvertorLength.setAttribute('class', 'weight-button');
	weigthConvertorLength.innerHTML = 'weight';
	weigthConvertorLength.id = 'weight-conv-btn';
	let timeConvertorLength = convertChooserLength.appendChild(document.createElement('div'));
	timeConvertorLength.setAttribute('class', 'time-button');
	timeConvertorLength.innerHTML = 'time';
	timeConvertorLength.id = 'time-conv-btn';

	let outputFieldForConvertedLenght = outputFieldConverter.appendChild(document.createElement('div'));
	outputFieldConverter.setAttribute('class', 'output-field-converter');
	let outputFromLenght = outputFieldForConvertedLenght.appendChild(document.createElement('div'));
	outputFromLenght.setAttribute('class', 'from-field-converter');
	outputFromLenght.id = 'from-value';
	let line = outputFieldForConvertedLenght.appendChild(document.createElement('div'));
	line.setAttribute('class', 'line');
	let outputToLenght = outputFieldForConvertedLenght.appendChild(document.createElement('div'));
	outputToLenght.setAttribute('class', 'to-field-converter');
	outputToLenght.id = 'to-value';





	//for weight
	let convertChooserWeight = outputFieldConverter.appendChild(document.createElement('div'));
	convertChooserWeight.setAttribute('class', 'mode-chooser-values');
	convertChooserWeight.id ='weight-output-div';
	let lenghtConvertWeight = convertChooserWeight.appendChild(document.createElement('div'));
	lenghtConvertWeight.setAttribute('class', 'lenght-button');
	lenghtConvertWeight.innerHTML = 'length';
	lenghtConvertWeight.id = 'len-conv-btn';
	let weigthConvertorWeight = convertChooserWeight.appendChild(document.createElement('div'));
	weigthConvertorWeight.setAttribute('class', 'weight-button');
	weigthConvertorWeight.innerHTML = 'weight';
	weigthConvertorWeight.style.backgroundColor = 'rgba(104, 115, 79, 1)';
	weigthConvertorWeight.style.color = 'white';
	weigthConvertorWeight.id = 'weight-conv-btn';
	let timeConvertorWeight = convertChooserWeight.appendChild(document.createElement('div'));
	timeConvertorWeight.setAttribute('class', 'time-button');
	timeConvertorWeight.innerHTML = 'time';
	timeConvertorWeight.id = 'time-conv-btn';

	let outputFieldForConvertedWeight = outputFieldConverter.appendChild(document.createElement('div'));
	outputFieldForConvertedWeight.setAttribute('class', 'output-field-converter');
	let outputFromWeight = outputFieldForConvertedWeight.appendChild(document.createElement('div'));
	outputFromWeight.setAttribute('class', 'from-field-converter');
	let line2 = outputFieldForConvertedWeight.appendChild(document.createElement('div'));
	line2.setAttribute('class', 'line');
	let outputToWeight = outputFieldForConvertedWeight.appendChild(document.createElement('div'));
	outputToWeight.setAttribute('class', 'to-field-converter');

	//for time
	let convertChooserTime = outputFieldConverter.appendChild(document.createElement('div'));
	convertChooserTime.setAttribute('class', 'mode-chooser-values');
	convertChooserTime.id ='time-output-div';
	let lenghtConvertTime = convertChooserTime.appendChild(document.createElement('div'));
	lenghtConvertTime.setAttribute('class', 'lenght-button');
	lenghtConvertTime.innerHTML = 'length';
	lenghtConvertTime.id = 'len-conv-btn';
	let weigthConvertorTime = convertChooserTime.appendChild(document.createElement('div'));
	weigthConvertorTime.setAttribute('class', 'weight-button');
	weigthConvertorTime.innerHTML = 'weight';
	weigthConvertorTime.id = 'weight-conv-btn';
	let timeConvertorTime = convertChooserTime.appendChild(document.createElement('div'));
	timeConvertorTime.setAttribute('class', 'time-button');
	timeConvertorTime.innerHTML = 'time';
	timeConvertorTime.style.backgroundColor = 'rgba(104, 115, 79, 1)';
	timeConvertorTime.style.color = 'white';
	timeConvertorTime.id = 'time-conv-btn';

	let outputFieldForConvertedTime = outputFieldConverter.appendChild(document.createElement('div'));
	outputFieldForConvertedTime.setAttribute('class', 'output-field-converter');
	let outputFromTime = outputFieldForConvertedTime.appendChild(document.createElement('div'));
	outputFromTime.setAttribute('class', 'from-field-converter');
	let line3 = outputFieldForConvertedTime.appendChild(document.createElement('div'));
	line3.setAttribute('class', 'line');
	let outputToTime = outputFieldForConvertedTime.appendChild(document.createElement('div'));
	outputToTime.setAttribute('class', 'to-field-converter');

	

	// let calculationsField = outputFieldConverter.appendChild(document.createElement('div'));
	// calculationsField.setAttribute('class', 'calculations-div');
	// let previousCalculationsField = calculationsField.appendChild(document.createElement('div'));
	// let currentCalculationsField = calculationsField.appendChild(document.createElement('div'));

	// ------------id fot active fields!!------------(for mishka)
	// previousCalculationsField.id = 'previous-conv';
	// currentCalculationsField.id = 'current-conv';

	let numberTable = document.createElement('table');
	numberTable.setAttribute('class', 'conv-table');
	let tableBody = numberTable.appendChild(document.createElement('tbody'));
	
	for (let i = 0; i < 4; i++) {
		let tableRow = tableBody.appendChild(document.createElement('tr'));
		
		for (let j = 0; j < 3; j++) {
			let tableCell = tableRow.appendChild(document.createElement('td'));
			// tableCell.setAttribute('forListener', 'adv');
			tableCell.innerHTML = symbolConvArray[i * 3 + j]; 
			tableCell.id = symbolConvArray[i * 3 + j];

			// ------------id for operations!------------(for mishka)
			if (symbolConvArray[i * 3 + j] == '.' || !isNaN(symbolConvArray[i * 3 + j]))
				tableCell.setAttribute('class', 'numbers');
			else if (isNaN(symbolConvArray[i * 3 + j])) 
				tableCell.setAttribute('class', 'operations');
			
		}
	}
	
	mainConverterDiv.appendChild(modeChooser);
	mainConverterDiv.appendChild(outputFieldConverter);
	numberTableDiv.appendChild(numberTable);
	mainConverterDiv.appendChild(numberTableDiv);
	
	document.body.appendChild(mainConverterDiv);
}

