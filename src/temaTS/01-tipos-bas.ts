console.log('Hola mundo'); //Mandarlo a la consola

//La declaración de variables puede ser con var, let y const
var num1 = 123;
let num2 = 123.456;
const num3 = 123;

let nombre: string; //Variable que contendra cadenas
let num: number;
let activo: boolean

let sum = num1 + num2 + num3;
console.log('El resultado es: ' + sum)
console.log(`El resultado es: ${sum}`);

let matricula:string|number
matricula='ABC12';
matricula=123;
console.log(`La matricula es: ${matricula}`)
