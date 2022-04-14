"use strict";

/* Se muestra un mensaje de bienvenida */

function saludar() {
    console.log("Sean Bienvenidos a nuestra Web!");
}
saludar();

/* Se prueba el uso de una calculadora como ejemplo dividiendo el número 100 por 2 */

function calculadora(primerNumeroAIngresar, segundoNumeroAIngresar, operacion) {
    switch (operacion) {
        case "+":
            return primerNumeroAIngresar + segundoNumeroAIngresar;
            break;

        case "-":
            return primerNumeroAIngresar - segundoNumeroAIngresar;
            break;

        case "*":
            return primerNumeroAIngresar * segundoNumeroAIngresar;
            break;

        case "/":
            return primerNumeroAIngresar / segundoNumeroAIngresar;
            break;

        default:
            return 0;
    }
}
let resultado = calculadora(100, 2, "/");
console.log("El resultado es igual a " + resultado);


/*Calculo el precio del producto Z (con iva incluído y neto de descuento) utilizando funciones flecha*/

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva   = x => x * 0.21;
let precioProductoZ  = 1000; 
let descuento = 100;  

let PrecioProductoZ = resta(suma(precioProductoZ, iva(precioProductoZ)), descuento ); 
console.log(PrecioProductoZ);


