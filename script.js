// The headline element
const display = document.querySelector('#display')

// The input field for size
const inputSize = document.querySelector('#input-size')
// The select field for font family
const selectFont = document.querySelector('#select-font')
// The input field for input color
const inputColor = document.querySelector('#input-color')
// The input field for input background color
const inputBgColor = document.querySelector('#input-bg-color')
// The textarea field for enter text
const enterText = document.querySelector('#enter-text')


// The element that displays the value 
const showSize = document.querySelector('#show-size')
// The element that displays the value 
const showFont = document.querySelector('#show-font')
// The element that displays the value 
const showColor = document.querySelector('#show-color')
// The element that displays the value 
const showBgColor = document.querySelector('#show-bg-color')


// Event Listeners
inputSize.addEventListener('input', handleInputSize)
selectFont.addEventListener('input', handleInputFont)
inputColor.addEventListener('input', handleInputColor)
inputBgColor.addEventListener('input', handleInputBgColor)
enterText.addEventListener('input', handleInputText)


// Event Handlers
function handleInputSize() {
	// get the font size:
	const fontSize = inputSize.value + 'px'
	// Set the style  
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}

function handleInputFont() {
	// get the font family:
	const fontFamily = selectFont.value
	// Set the style 
	display.style.fontFamily = fontFamily
	// Show the font family
	showFont.innerHTML = fontFamily
}

function handleInputColor() {
	// get the font color:
	const fontColor = inputColor.value
	// Set the style 
	display.style.color = fontColor
	// Show the font color
	showColor.innerHTML = fontColor
}

function handleInputBgColor() {
	// get the background color:
	const bgColor = inputBgColor.value
	// Set the style 
	display.style.backgroundColor = bgColor
	// Show the background color
	showBgColor.innerHTML = bgColor
}

function handleInputText() {
	// get the font size:
	const text = enterText.value
	// Set the style 
	display.innerHTML = text
}


