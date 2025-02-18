
/*function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50;
    return diasRetraso * multaPorDia;
}

let resultado = calcularMulta(5); 
console.log(`La multa por 7 días de retraso es: $${resultado}`);*/



/*function prestarLibro(titulo, usuario) {
    console.log(`El libro "${titulo}" ha sido prestado a ${usuario}.`);
}

prestarLibro(1984, "Ana");
// Muestra: El libro "1984" ha sido prestado a Ana.*/



function devolverLibro(titulo, diasRetraso) {
    const multa = diasRetraso * 0.50;
    const mensaje = diasRetraso > 0 
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
        : "Devuelto a tiempo. No hay multa.";
    console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

//devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.


/*const suma = function(a, b) {
    return a + b;
};
console.log(suma(5, 3)); // Salida: 8*/