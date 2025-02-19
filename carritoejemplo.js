

// function suma(a,b){
//     const total = a+b;

//     return total;
// }

// const resultadoSuma = suma(10,20);

// function mayorQue(numero){
//     return (m) => m > numero;
// }

// const mayorQueCinco = mayorQue(5);

// // const mayorQueCinco = (m) => m > 5;
// console.log(mayorQueCinco(10));
// const mayorQueVeinte = mayorQue(20);
// console.log(mayorQueVeinte(10));


const estudiantes = [
    { id: 1, nombre: 'Juan', edad: 20, calificacion: 85 },
    { id: 2, nombre: 'María', edad: 22, calificacion: 92 },
    { id: 3, nombre: 'Luis', edad: 21, calificacion: 78 },
    { id: 4, nombre: 'Ana', edad: 23, calificacion: 88 },
    { id: 5, nombre: 'Pedro', edad: 19, calificacion: 95 },
    { id: 6, nombre: 'Sofía', edad: 24, calificacion: 80 },
    { id: 7, nombre: 'Carlos', edad: 25, calificacion: 74 },
    { id: 8, nombre: 'Lucía', edad: 20, calificacion: 91 },
    { id: 9, nombre: 'David', edad: 21, calificacion: 23 },
    { id: 10, nombre: 'Elena', edad: 22, calificacion: 45 }
];

// find
// buscar sobre truthy / falsy --> TAREA p/hogar

// const id = parseInt(prompt('ingrese el id del estudiante'));
// const objetoEncontrado = estudiantes.find( (estud) => estud.id === id);
// if(objetoEncontrado === undefined){ // undefined = falso;
//     alert('noo existe el alumno con ese id')
// }
// console.log(objetoEncontrado);


// FILTER
// const desaprobados = estudiantes.filter( est => est.calificacion > 70000);
// console.log(desaprobados);


//forEach

// estudiantes.forEach( (estudiante) => {
   
//     estudiante.edad = 0;

    
// });

// console.log(estudiantes);


const carrito = [];
const productos = [
    {
        id: 1,
        nombre: 'monitor 25 pulgadas',
        precio: 250000,
        marca: 'samsung',
    },
    {
        id: 2,
        nombre: 'placa madre b450m',
        precio: 80000,
        marca: 'asus',
    },
    {
        id: 3,
        nombre: 'ryzen 7 5700G',
        precio: 150000,
        marca: 'amd',
    },
]

const listadoProductos = productos.reduce((acc, el) => acc += `${el.id} - ${el.nombre} - ${el.precio} \n`, ""); 



const verCarritoYTotal = () => {


    if(carrito.length > 0){
        const totalCarrito = carrito.reduce( (acc, el) => acc += (el.precio * el.cantidad), 0);
        console.log(totalCarrito);
    
        const listaCarrito = carrito.reduce( (acc, el) => acc += `${el.id} - ${el.nombre} - ${el.precio * el.cantidad} \n `, "");
    
        alert(`${listaCarrito} \n El total a pagar es: ${totalCarrito}`);

    } else {
        alert('su carrito está vacío');
    }

    
} 

const gestionarCompraProductos = () => {

    const menu = `Elija un producto de la lista, ingrese 0 para volver al menu principal: \n ${listadoProductos}`
    let id = parseInt(prompt(menu));

    if(id === 0){
        alert('Regresando al menu principal');
        return;
    }

    const productoSeleccionado = productos.find( prod => prod.id === id); // != undefined
    const existeEnCarrito = carrito.some( prod => prod.id === productoSeleccionado.id); // true || false

    if(productoSeleccionado && !existeEnCarrito ){
        
        const producto = {
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            marca: productoSeleccionado.marca,
            cantidad: 1,
        }

        
        carrito.push(producto);
        alert('producto agregado');
    } 

    else if(productoSeleccionado && existeEnCarrito){

        const indice = carrito.findIndex( prod => prod.id === productoSeleccionado.id);

        carrito[indice].cantidad++;


    }

    else {
        alert('no encontré el producto');
    }
    

    console.log(carrito);
};

const procesarSeleccionDelUsuario = (seleccion) => {
    switch(seleccion){
        case 1:
            alert('aquí va el listado de prods');
            alert(listadoProductos);
            break;
        case 2: 
            alert('accediendo a la compra de producto');
            gestionarCompraProductos();
            break;
        case 3:
            alert('mostrando carrito');
            verCarritoYTotal();
        default:
            alert('regresando');
            break;
    }
}

const mostrarMenuPricipal = () => {

    let seleccion;

    while(seleccion !== 0){

        seleccion = parseInt(
            prompt(
                `Te doy la bienvenida, ¿qué deseas hacer hoy?
                
                    1) Ver el listado de productos.
                    2) Comprar un producto.
                    3) Ver carrito.
                    0) Salir.
                `
            )
        );

        if( seleccion < 0 || seleccion > 3){
            alert('lo siento, debes ingresar un num valido');
        } else{
            procesarSeleccionDelUsuario(seleccion);
        }
    }
}







mostrarMenuPricipal();