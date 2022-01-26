// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}
console.groupEnd();


// Código del Triángulo
console.group("Tríangulos");
function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

console.groupEnd();


// Código del círculo
console.group("Círculos");
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



// Aquí interactuamos con el HTML
// CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}


// TRIANGULO
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;

    const area = areaTriangulo(base, altura);
    alert(area)
}


// CIRCULO
function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo").value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo").value;

    const area = areaCirculo(radio);
    alert(area);
}