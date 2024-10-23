
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let diez = document.getElementById("diez");
let once = document.getElementById("once");
let doce = document.getElementById("doce");
let trece = document.getElementById("trece");
let catorce = document.getElementById("catorce");
let quince = document.getElementById("quince");
let dieciseis = document.getElementById("dieciseis");
let diecisiete = document.getElementById("diecisiete");
let dieciocho = document.getElementById("dieciocho");
let diecinueve = document.getElementById("diecinueve");
let veinte = document.getElementById("veinte");
//CREAMOS LAS VARIABLES CON LAS IMG 

//CREAR ARRAYS 

let casillas = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte];
let paths = ["IMG/ardilla.png", "IMG/cerdo.png", "IMG/conejo.png", "IMG/elefante.png", "IMG/erizo.png", "IMG/jirafa.png", "IMG/oso-panda.png", "IMG/oveja.png", "IMG/vaca.png", "IMG/zorro.png", "IMG/ardilla.png", "IMG/cerdo.png", "IMG/conejo.png", "IMG/elefante.png", "IMG/erizo.png", "IMG/jirafa.png", "IMG/oso-panda.png", "IMG/oveja.png", "IMG/vaca.png", "IMG/zorro.png"];
// CREAMOS UN ARRAY CON LAS IMG

function barajar(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }


    // return arrayBarajado;
}

function asignarFoto(array1, array2) {
    //let barajado = imagenes;
    //ESTA CAMBIA LA VARIABLE GLOBAL
    array1.forEach(img => {
        img.setAttribute("src", array2.pop());
    });
}

barajar(paths);

asignarFoto(casillas, paths);
console.log(casillas);


// CONTADOR DE ACIERTOS 
let boton = document.getElementById("reiniciar");
//boton.addEventListener("click", reiniciarPartida);
//boton.setAttribute("onclick", "location.reload()");

// CONTADOR DE ACIERTOS
let contadorAciertos = 0;
let contador=0;
let src1 = "";
let src2 = "";
let primerElemento = null;

// FUNCION SUMAR ACIERTOS
function sumarAciertos() {

    let parrafo = document.getElementById("aciertosMostrar");
    parrafo.setAttribute("class", "forma-h2");

    if (contadorAciertos < 10) {
        contadorAciertos++;
    }

    let aciertos = "Parejas ";
    for (let i = 0; i < 10; i++) {
        aciertos += (i < contadorAciertos) ? "🟢" : "⚪";
    }

    if (contadorAciertos==10) {
        alert("¡HAS GANADO LA PARTIDA!");
        mostrarBotonReiniciar();
    }
    parrafo.innerHTML = aciertos;
    return contadorAciertos;
}

function mostrarBotonReiniciar() {
    let contenedor = document.getElementById("botonReiniciar");
    let boton = document.createElement("input");
    boton.setAttribute("class", "boton");
    boton.setAttribute("type", "button");
    boton.setAttribute("value", "Jugar de Nuevo");
    boton.setAttribute("onclick", "location.reload()");
    contenedor.appendChild(boton);
}


let contenedorIMG = document.querySelectorAll("img");


function quitarFondo() {
    contenedorIMG.forEach(img => {   
        if (!img.classList.contains("fijo")) {
            img.addEventListener("click", seleccionarImg);
            img.setAttribute("class", "quitarFondo");
        }
    });
}

quitarFondo();

function seleccionarImg(element) {
    element.target.removeAttribute("class", "quitarFondo");
    element.target.setAttribute("class", "mostrarFondo");

    if (contador===0) {
        src1 = element.target.src;
        primerElemento = element.target;
        actualizarContador();
    }else if(contador===1){
        src2 = element.target.src;      
        actualizarContador();
        if(comparar(src1,src2)=="SI"){
            primerElemento.removeAttribute("class");
            primerElemento.setAttribute("class","fijo");
            element.target.removeAttribute("class");
            element.target.setAttribute("class","fijo");
            sumarAciertos();
        }else{
            if (!element.target.classList.contains("fijo")) {
                quitarFondo();
            }
           
        }
    }
    //let src = element.target.src;
    console.log(src1);
    console.log(src2);
    console.log(contador);
    //return src;
}

function actualizarContador() {
    contador++;
    if (contador==2) {
        contador=0;
    }
}

//let src = seleccionarImg();


function comparar(src1, src2) {

    let pareja = "";
    if (src1 == src2) {
        pareja = "SI";
        console.log("PAREJA");
    }else{
        console.log("NO PAREJA");
        pareja="NO";
    }

    return pareja;
}



console.log(contenedorIMG);
console.log("SRC 1: " + src1);
console.log("SRC 2: " + src2);

let tabla = document.getElementById("tabla");
let tds = tabla.querySelectorAll("td");

// CREO QUE SOBRA
function asisgnarFijo(src) {
    tds.forEach(td => {
        console.log(td);
        if (td.src === src1) {
            td.removeAttribute("class");
            td.setAttribute("class","fijo");
        }
    
    });
}


// REVISAR Y MEJORAR DE MOMENTO NO FUNCIONA
let contenedorTabla = document.querySelectorAll("td");

function asignarEventoSombra() {
    contenedorTabla.forEach(td => {
        td.addEventListener("mouseover", ponerSombra);
        td.addEventListener("mouseout", quitarSombra);
    });
}

function ponerSombra(element) {
    element.target.removeAttribute("class");
    element.target.setAttribute("class","sombra");
}

function quitarSombra(element){
    element.target.removeAttribute("class");
}


