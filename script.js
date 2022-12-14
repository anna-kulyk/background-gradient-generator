let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let output = document.querySelector('h3');

color1.addEventListener('input', changeBackgroundColor);
color2.addEventListener('input', changeBackgroundColor);

function changeBackgroundColor() {
	document.body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
	output.textContent = `background: ${document.body.style.background};`;
}