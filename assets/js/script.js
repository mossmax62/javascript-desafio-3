//Seleccionar elemento
const div = document.querySelector('#pri');
//Expresion de funcion para cambiar color de fondo de un div,
//recibe parametros elementoHTML y color,
//tiene valor por defecto green para el parametro color
const pintarFondoDiv = (div, color = 'green') => { div.style.backgroundColor = color; }
//Agregar litener que escucha por evento on click
// y via funcion anonima llama a funcion pintar fondo
div.addEventListener('click', () => { pintarFondoDiv(div, 'yellow') });
//Probar valor por defecto verde al llamar a la funcion con solo
//un parametro
div.addEventListener('mouseleave', () => { pintarFondoDiv(div) });



