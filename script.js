let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let output = document.querySelector('h3');
let copyBtn = document.querySelector('#copy');

color1.addEventListener('input', changeBackgroundColor);
color2.addEventListener('input', changeBackgroundColor);
copyBtn.addEventListener('click', copyToClipboard)

function changeBackgroundColor() {
	document.body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
	output.textContent = `background: ${document.body.style.background};`;
}

function copyToClipboard() {
	let copyText = output.textContent;
	navigator.clipboard.writeText(copyText);
}