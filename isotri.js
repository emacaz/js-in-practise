let base;

function draw(base) {

    const canvas = document.getElementById("canvas");

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext("2d");

    // set line stroke and line width
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(20, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();

}


function alturaIsosceles(lado1, lado2, lado3) {

    let a, b, c, h;

    if (lado1 === lado2 && lado1 === lado3){

        console.log("Es Equilatero");
        return "Es equilatero";

    } else if (lado1 === lado2 && lado1 !== lado3) {
        a = lado1;
        b = lado2;
        c = lado3;

    } else if (lado1 === lado3 && lado1 !== lado2) {
        a = lado1;
        b = lado3;
        c = lado2;

    } else if (lado2 === lado3 && lado2 !== lado1) {
        a = lado2;
        b = lado3;
        c = lado1;

    } else {
        alert("Es Escaleno");
    }

    h = Math.sqrt(( Math.pow(a, 2) ) - ( ( Math.pow(c, 2) ) / 4 ));
    if (h === 0) {
        console.log("Los lados del triángulo no tienen lógica");
    } else {
        return h;
        console.log(`Altura del triángulo Isosceles: ${h}`);
    }
}

function calcularAltura() {
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const lado3 = document.getElementById("lado3").value;

    Number(lado1);
    Number(lado2);
    Number(lado3);

    const altura = alturaIsosceles(lado1, lado2, lado3);
    alert(altura);

    draw(base)
}
