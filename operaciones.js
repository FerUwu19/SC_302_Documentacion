# Auto detect text files and perform LF normalization
    * text=auto
//Desarrollador 2
function suma(a, b) {
    return a + b;
<<<<<<< HEAD
}

// Desarrollador 3
}
// Desarrollador 3
>>>>>>> f782dd85e97d4d4a84f6ca35990b9d81d9df6227
function resta(a, b) {
    return a - b;
}
// Desarrollador 1
function multiplicacion(a, b) {
    return a * b;
}
// Desarrollador 4
function division(a, b) {
    return a / b;
}
// Desarrollador 1 

function potencia(base, exponente) {

    return Math.pow(base, exponente);

}

// Desarrollador 2
function raizCuadrada(n) {
    return Math.sqrt(n);
}
// Desarrollador 4 

function porcentaje(n, porcentaje) {

    return (n * porcentaje) / 100;

}
// Desarrollador 1 

function promedio(numeros) {

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {

        suma += numeros[i];

    }

    return suma / numeros.length;
}
// Desarrollador 4
function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
// Desarrollador 3 

function maximo(numeros) {

    let max = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > max) {

            max = numeros[i];

        }

    }

    return max;

}

// Desarrollador 2
function minimo(numeros) {
    let min = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < min) {
            min = numeros[i];
        }
    }
    return min;
}

