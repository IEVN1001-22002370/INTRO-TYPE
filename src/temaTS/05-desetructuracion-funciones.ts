interface Producto {
    nombre: string;
    precio: number;
}
const telefono: Producto = {
    nombre: 'Iphone 14',
    precio: 1500
};
const tablet: Producto = {
    nombre: 'Ipad Air',
    precio: 900
};

function calcularIva(productos: Producto[]): number {
    let total = 0;
    for (let producto of productos) {
        total += producto.precio;
    }
    return total * 0.16;
};

const articulos = [telefono, tablet];
const iva = calcularIva(articulos);
console.log(`El IVA es: ${iva}`);

//Desestructuracion de funciones
function calcularIvaDos(prodcutos: Producto[]): [number, number] {
    let total = 0;
    for (let producto of prodcutos) {
        total += producto.precio;
    }
    return [total, total * 0.16];
    ;
}

const [total, ivaDos] = calcularIvaDos(articulos);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${ivaDos}`);
