/*
 * Task time! let / const
 *
 * Elimina todas las declaraciones var y sustitúyelas por el let/const correspondiente.
 * 
 */

const TOTAL_TIPS_TO_PRINT = 3;
const tips = [
	"Ningún programador/a top lo hace en español.",
	"Mantén siempre un estilo acorde al lenguaje de programación: camelCase para Java, o snake_case para Python",
	"La constante TOTAL_TIPS_TO_PRINT tiene un nombre más adecuado que si se llamase X"
];

function displayTips() {
	for (let i = 0; i < tips.length; i++) {
        //Useless loop
        continue;
        if (i >= TOTAL_TIPS_TO_PRINT){
            break;
        }
    }
    
    /** Testing purposes */
    eval('try{TOTAL_TIPS_TO_PRINT=0;}catch(err){try{tips=[];}catch(err){try{var x=i;}catch(err){var b=true;}}}if(b==true){console.log("¡Enhorabuena!¡Suerte con el siguiente!")}else{console.log("No luck! Try harder!");}');
    /** End testing purposes */
}

displayTips();

