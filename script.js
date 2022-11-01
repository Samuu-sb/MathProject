//VARIABLES
let Af1c1, Af1c2, Af1c3, Af2c1, Af2c2, Af2c3, Af3c1, Af3c2, Af3c3, Bf1c1, Bf1c2, Bf1c3, Bf2c1, Bf2c2, Bf2c3, Bf3c1, Bf3c2, Bf3c3;

function getNumbers()
{
    Af1c1 = +document.getElementById("Af1c1").value;
    Af1c2 = +document.getElementById("Af1c2").value;
    Af1c3 = +document.getElementById("Af1c3").value;
    Af2c1 = +document.getElementById("Af2c1").value;
    Af2c2 = +document.getElementById("Af2c2").value;
    Af2c3 = +document.getElementById("Af2c3").value;
    Af3c1 = +document.getElementById("Af3c1").value;
    Af3c2 = +document.getElementById("Af3c2").value;
    Af3c3 = +document.getElementById("Af3c3").value;

    Bf1c1 = +document.getElementById("Bf1c1").value;
    Bf1c2 = +document.getElementById("Bf1c2").value;
    Bf1c3 = +document.getElementById("Bf1c3").value;
    Bf2c1 = +document.getElementById("Bf2c1").value;
    Bf2c2 = +document.getElementById("Bf2c2").value;
    Bf2c3 = +document.getElementById("Bf2c3").value;
    Bf3c1 = +document.getElementById("Bf3c1").value;
    Bf3c2 = +document.getElementById("Bf3c2").value;
    Bf3c3 = +document.getElementById("Bf3c3").value;
}

let Nf1c1 = 0;
let Nf1c2 = 0;
let Nf1c3 = 0;
let Nf2c1 = 0;
let Nf2c2 = 0;
let Nf2c3 = 0;
let Nf3c1 = 0;
let Nf3c2 = 0;
let Nf3c3 = 0;

const result = document.getElementById("result");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
const result5 = document.getElementById("result5");
const result6 = document.getElementById("result6");
const result7 = document.getElementById("result7");
const result8 = document.getElementById("result8");
const addButton = document.getElementById("a-plus-b");

//FUNCIONES

//addButton.addEventListener('click', sumaDeMatrices);

function sumaDeMatrices(){
    getNumbers();
    Nf1c1 = Af1c1 + Bf1c1;
    Nf1c2 = Af1c2 + Bf1c2;
    Nf1c3 = Af1c3 + Bf1c3;
    Nf2c1 = Af2c1 + Bf2c1;
    Nf2c2 = Af2c2 + Bf2c2;
    Nf2c3 = Af2c3 + Bf2c3;
    Nf3c1 = Af3c1 + Bf3c1;
    Nf3c2 = Af3c2 + Bf3c2;
    Nf3c3 = Af3c3 + Bf3c3;

    result.innerHTML = Nf1c1;
    result1.innerHTML = Nf1c2;
    result2.innerHTML = Nf1c3;
    result3.innerHTML = Nf2c1;
    result4.innerHTML = Nf2c2;
    result5.innerHTML = Nf2c3;
    result6.innerHTML = Nf3c1;
    result7.innerHTML = Nf3c2;
    result8.innerHTML = Nf3c3;
    
}

function restaDeMatrices(){
    getNumbers();
    Nf1c1 = Af1c1 - Bf1c1;
    Nf1c2 = Af1c2 - Bf1c2;
    Nf1c3 = Af1c3 - Bf1c3;
    Nf2c1 = Af2c1 - Bf2c1;
    Nf2c2 = Af2c2 - Bf2c2;
    Nf2c3 = Af2c3 - Bf2c3;
    Nf3c1 = Af3c1 - Bf3c1;
    Nf3c2 = Af3c2 - Bf3c2;
    Nf3c3 = Af3c3 - Bf3c3;

    result.innerHTML = Nf1c1;
    result1.innerHTML = Nf1c2;
    result2.innerHTML = Nf1c3;
    result3.innerHTML = Nf2c1;
    result4.innerHTML = Nf2c2;
    result5.innerHTML = Nf2c3;
    result6.innerHTML = Nf3c1;
    result7.innerHTML = Nf3c2;
    result8.innerHTML = Nf3c3;
}

function multiplicacionDeMatrices(){
    getNumbers();
    Nf1c1 = Af1c1 * Bf1c1 + Af1c2 * Bf2c1 + Af1c3 * Bf3c1;
    Nf1c2 = Af1c1 * Bf1c2 + Af1c2 * Bf2c2 + Af1c3 * Bf3c2;
    Nf1c3 = Af1c1 * Bf1c3 + Af1c2 * Bf2c3 + Af1c3 * Bf3c3;
    Nf2c1 = Af2c1 * Bf1c1 + Af2c2 * Bf2c1 + Af2c3 * Bf3c1;
    Nf2c2 = Af2c1 * Bf1c2 + Af2c2 * Bf2c2 + Af2c3 * Bf3c2;
    Nf2c3 = Af2c1 * Bf1c3 + Af2c2 * Bf2c3 + Af2c3 * Bf3c3;
    Nf3c1 = Af3c1 * Bf1c1 + Af3c2 * Bf2c1 + Af3c3 * Bf3c1;
    Nf3c2 = Af3c1 * Bf1c2 + Af3c2 * Bf2c2 + Af3c3 * Bf3c2;
    Nf3c3 = Af3c1 * Bf1c3 + Af3c2 * Bf2c3 + Af3c3 * Bf3c3;

    result.innerHTML = Nf1c1;
    result1.innerHTML = Nf1c2;
    result2.innerHTML = Nf1c3;
    result3.innerHTML = Nf2c1;
    result4.innerHTML = Nf2c2;
    result5.innerHTML = Nf2c3;
    result6.innerHTML = Nf3c1;
    result7.innerHTML = Nf3c2;
    result8.innerHTML = Nf3c3;
}

function transpuestaDeA(){
    getNumbers();
    Nf1c1 = Af1c1;
    Nf1c2 = Af2c1;
    Nf1c3 = Af3c1;
    Nf2c1 = Af1c2;
    Nf2c2 = Af2c2;
    Nf2c3 = Af3c2;
    Nf3c1 = Af1c3;
    Nf3c2 = Af2c3;
    Nf3c3 = Af3c3;

    result.innerHTML = Nf1c1;
    result1.innerHTML = Nf1c2;
    result2.innerHTML = Nf1c3;
    result3.innerHTML = Nf2c1;
    result4.innerHTML = Nf2c2;
    result5.innerHTML = Nf2c3;
    result6.innerHTML = Nf3c1;
    result7.innerHTML = Nf3c2;
    result8.innerHTML = Nf3c3;
}

function transpuestaDeB(){
    getNumbers();
    Nf1c1 = Bf1c1;
    Nf1c2 = Bf2c1;
    Nf1c3 = Bf3c1;
    Nf2c1 = Bf1c2;
    Nf2c2 = Bf2c2;
    Nf2c3 = Bf3c2;
    Nf3c1 = Bf1c3;
    Nf3c2 = Bf2c3;
    Nf3c3 = Bf3c3;

    result.innerHTML = Nf1c1;
    result1.innerHTML = Nf1c2;
    result2.innerHTML = Nf1c3;
    result3.innerHTML = Nf2c1;
    result4.innerHTML = Nf2c2;
    result5.innerHTML = Nf2c3;
    result6.innerHTML = Nf3c1;
    result7.innerHTML = Nf3c2;
    result8.innerHTML = Nf3c3;
}

