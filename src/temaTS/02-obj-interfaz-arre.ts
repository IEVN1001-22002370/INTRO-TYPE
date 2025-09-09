//Creacion de interfaz 
interface Alumno {
    nombre: string,
    edad: number,
    curso: string,
    email?: string,
    nota: number | string
}

//Objeto con propiedades
const alumno: Alumno = {
    edad: 23,
    nombre: "Juan",
    curso: "TypeScript",
    email: "juan@gmail.com",
    nota: 7.5
}

console.log(`El alumno ${alumno.nombre}
    tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

//Creación de arreglos
let mascotas: string[] = ['Perro', 'Gato', 'Hamster'];
mascotas[1] = 'Pájaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas: (number | string)[] = [7, 8, 9, 'Aprobado'];
notas.push(10);
notas.push('Sobresaliente');
console.log(notas);
