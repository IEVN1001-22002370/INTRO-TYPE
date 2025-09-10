import { calcularIvaDos, type Producto } from "./05-desetructuracion-funciones";

const carrito: Producto[] = [
    {
        nombre: 'Iphone14',
        precio: 1500
    },
    {
        nombre: 'Ipad Air',
        precio: 900
    },
    {
        nombre: 'Macbook Pro',
        precio: 2500
    }
];

const [total, iva] = calcularIvaDos(carrito);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${iva}`);
