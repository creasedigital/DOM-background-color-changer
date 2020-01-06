var firstColor = document.querySelector('.firstColor');
var secondColor = document.querySelector('.secondColor');
var cssValue = document.querySelector('h3');
var body = document.getElementById('gradient')

function setGradient() {
    body.style.background = `linear-gradient(to right, ${firstColor.value} , ${secondColor.value} ) `;
    // body.style.background = 'linear-gradient(to right, ' + firstColor.value + ' ,' + secondColor.value + ')';

    cssValue.textContent = body.style.background

}


firstColor.addEventListener('input', setGradient)
secondColor.addEventListener('input', setGradient)