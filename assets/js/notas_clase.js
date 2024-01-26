const div1 = document.querySelector('#pri');
const div2 = document.querySelector('#seg');
const div3 = document.querySelector('#ter');

document.addEventListener('keydown',function (event){
    if(event.key=='a'){
        pintarFondoDiv(div2,'blue');
    }
    if(event.key=='b'){
        pintarFondoDiv(div3,'yellow');
        pintarFondoDiv(div1);
    }
    if(event.key=='d'){
        addDivToBody();
    }
    if(event.key=='r'){
        deleteLastDiv();
    }
}
)

div1.addEventListener('click',()=>{
    pintarFondoDivNegro(div3);
});

const alerta = ()=>{
    console.log('texto');
    alert('texto');
};

div2.addEventListener('click',alerta);



function pintarFondoDivNegro(div){
    div.style.backgroundColor = 'black';
}

function pintarFondoDiv(div,color='green'){
    div.style.backgroundColor = color;
}

function addDivToBody(){
    let contenedor = document.querySelector('.container');
    let nuevoDiv = document.createElement('div');
    nuevoDiv.textContent='Esto es un nuevo div';
    contenedor.appendChild(nuevoDiv);
}

function deleteLastDiv(){
    let contenedor = document.querySelector('.container');
    let elementos = document.querySelectorAll('div');
    if(elementos.length>0){
        contenedor.removeChild(elementos[(elementos.length-1)]);
    }
    
}