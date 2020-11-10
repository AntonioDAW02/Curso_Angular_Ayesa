const array = ["primero", "segundo", "tercero"];

const a = array[0];

//console.log(a);

const [var1, var2, var3] = array;
//console.log(var2);
//console.log(array);

const person = {
    name: 'Antonio',
    surname: 'Garcia'
}

//const {name, surname} = person;
//console.log(`Hola, ${name} ${surname}`);
//otra forma - utilizando tipado
const {name: nombre, surname: apellido} = person;
console.log(`Hola, ${nombre} ${apellido}`);

//console.log(person.name);