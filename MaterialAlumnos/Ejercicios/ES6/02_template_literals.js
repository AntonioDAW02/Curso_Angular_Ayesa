/*
 * Task time! Template Literals
 *
 * Transforma el texto usando template literals
 * 
 */

const name = "Juan";
const surname = "Aguilar";
const courseType = "ES6 and Angular";
const oldWayMessage = "<div>\n"+
                    "<p>Hi " + name + " "+surname+" welcome to this " + courseType + " course</p>\n"+
                "</div>";

const welcomeMessage = `<div>
                        <p>Hi ${name} ${surname} welcome to this ${courseType} course </p>
                        </div>`;





 function test(){
    var wt = "<div>\n<p>Hi "+name+" "+surname+" welcome to this "+courseType+" course</p>\n</div>";
    eval('if(welcomeMessage===wt){console.log("¡Enhorabuena!¡Suerte con el siguiente!");}else{console.log("No luck! Try harder!");}');
 }

 test();
