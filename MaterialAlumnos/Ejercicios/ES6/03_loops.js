/*
 * Task time! Loops
 *
 * Calcula la suma de los elementos del array con for..in y con for..of
 * 
 */

const values = [2, 25, 10, 20, 30, 213];

function calculateIn(){
    let suma = 0;
    for (const key in values) {
            suma += values[key];
    }
    return suma;
}

function calculateOf(){
    let suma = 0;
    for (const value of values) {
        suma += value;
    }
    return suma;
}


function test(){
    if(calculateIn() ===  300 && calculateOf() === 300){
        console.log("¡Enhorabuena!¡Suerte con el siguiente!");
    }else{
        console.log("No luck! Try harder!");
    }
}

test();
