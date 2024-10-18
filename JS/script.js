<<<<<<< Updated upstream
=======
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

let imagenes = [uno, dos, tres, cuatro,cinco,seis,siete,ocho,nueve,diez,once,doce,trece,catorce,quince,dieciseis,diecisiete,dieciocho,diecinueve,veinte];
let paths = ["IMG/ardilla.png","IMG/cerdo.png","IMG/conejo.png","IMG/elefante.png","IMG/erizo.png", "IMG/jirafa.png","IMG/oso-panda.png", "IMG/oveja.png", "IMG/vaca.png","IMG/zorro.png","IMG/ardilla.png","IMG/cerdo.png","IMG/conejo.png","IMG/elefante.png","IMG/erizo.png", "IMG/jirafa.png","IMG/oso-panda.png", "IMG/oveja.png", "IMG/vaca.png","IMG/zorro.png"];
// CREAMOS UN ARRAY CON LAS IMG

function barajar(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
   

   // return arrayBarajado;
}

function asignarFoto(array1,array2){
    let barajado = imagenes;
    //ESTA CAMBIA LA VARIABLE GLOBAL
    array1.forEach(img => {
        img.setAttribute("src",array2.pop());
    });
}

barajar(paths);

asignarFoto(imagenes,paths);
console.log(imagenes);




>>>>>>> Stashed changes
