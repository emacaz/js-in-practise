let mediana;

function esPar (numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
};


function calcularMediana (lista) {

    // Ordenar lisa
    lista = lista.sort(function (a, b) {
        return a - b;
    });

    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {

        // si es par
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        mediana = (elemento1 + elemento2) / 2;
    } else {

        //si es impar
        mediana = lista[mitadLista]
    }

    return mediana;
}