// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triángulo
console.group("Tríangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triánguloa miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm."
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm.");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm.");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

// console.log("El área del triángulo es de: " + areaTriangulo + "cm2.");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de : " + radioCirculo + "cm.");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return PI * Math.pow(radio, 2);
}


console.groupEnd();