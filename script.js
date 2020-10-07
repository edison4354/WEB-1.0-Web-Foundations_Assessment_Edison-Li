// The headline element
const display = document.querySelector('#display')

// The input field for size
const inputSize = document.querySelector('#input-size')
// The element that displays the value 
const showSize = document.querySelector('#show-size')

// The select field for font family
const selectFont = document.querySelector('#select-font')
// The element that displays the value 
const showFont = document.querySelector('#show-font')

// The input field for input color
const inputColor = document.querySelector('#input-color')
// The element that displays the value 
const showColor = document.querySelector('#show-color')

// The input field for input background color
const inputBgColor = document.querySelector('#input-bg-color')
// The element that displays the value 
const showBgColor = document.querySelector('#show-bg-color')

// The textarea field for enter text
const enterText = document.querySelector('#enter-text')



inputSize.addEventListener('input', handleInput)

function handleInput() {
	// get the font size:
	const fontSize = inputSize.value
	// Set the style 
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}

selectFont.addEventListener('select', handleInputFont)

function handleInputFont() {
	// get the font family:
	const fontFamily = selectFont.value
	// Set the style 
	display.style.fontFamily = fontFamily
	// Show the font family
	showFont.innerHTML = fontFamily
}


inputColor.addEventListener('input', handleInputColor)

function handleInputColor() {
	// get the font color:
	const fontColor = inputColor.value
	// Set the style 
	display.style.color = fontColor
	// Show the font color
	showColor.innerHTML = fontColor
}


inputBgColor.addEventListener('input', handleInputBgColor)

function handleInputBgColor() {
	// get the background color:
	const bgColor = inputBgColor.value
	// Set the style 
	display.style.backgroundColor = bgColor
	// Show the background color
	showBgColor.innerHTML = bgColor
}


enterText.addEventListener('textarea', handleInputText)

function handleInputText() {
	// get the font size:
	const textArea = enterText.value
	// Set the style 
	display.innerHTML = textArea
}


