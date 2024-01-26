const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const key = document.querySelector('#key');

const pintarFondoNegro = (div) => { div.style.backgroundColor = 'black' }

one.addEventListener('click', () => { pintarFondoNegro(one) });
two.addEventListener('click', () => { pintarFondoNegro(two) });
three.addEventListener('click', () => { pintarFondoNegro(three) });
four.addEventListener('click', () => { pintarFondoNegro(four) });

let color;
document.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === 'a') {
        color = 'pink';
        key.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orangered';
        key.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'lightblue';
        key.style.backgroundColor = color;
    } else if (event.key === 'q') {
        color = 'blueviolet';
        addDiv(color);
    } else if (event.key === 'w') {
        color = 'grey';
        addDiv(color);
    } else if (event.key === 'e') {
        color = 'brown';
        addDiv(color);
    } else if (event.key === 'r') {
        removeDiv();
    }
})

const addDiv = (color) => {
    let contenedor = document.querySelector('.container2');
    let div = document.createElement('div');
    div.style.backgroundColor = color;
    contenedor.appendChild(div);
}

const removeDiv = () => {
    let contenedor = document.querySelector('.container2');
    let div = document.createElement('div');
    let elementos = document.querySelectorAll('div');
    if (elementos.length > 0) {
        contenedor.removeChild(elementos[(elementos.length - 1)]);
    }
}
