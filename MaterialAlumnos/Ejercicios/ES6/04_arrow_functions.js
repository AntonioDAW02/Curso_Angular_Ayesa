/*
 * Task time! Arrow Functions
 *
 * Replica la misma funcion utilizando arrows
 * 
 */

const elements = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Cobalt"
  ];
  

function getElementsLength(elements){
    return elements.map(function(element){
        return element.length;
    });
}

function getElementsLengthWithArrow(elements){
    //TODO: Replica getElementsLength utilizando ArrowFunctions
    return elements.map(getLengthFunction);
}

const getLengthFunction = element => element.length;


/** Testing purposes */
function test(){
    if(getElementsLengthWithArrow(elements).length === [8, 6, 7, 6].length){
        console.log("¡Enhorabuena!¡Suerte con el siguiente!");
    }else{
        console.log("No luck! Try harder!");
    }
}

test(); 