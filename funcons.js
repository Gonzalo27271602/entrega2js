/*//--------------FUNCION CONSTRUCTORA---------------

class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    describir() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
    }
}

// Crear un nuevo objeto Persona
const persona1 = new Persona("Ana", 25, "Calle Falsa 123");
console.log(persona1.describir());

//----------LOCAL STORAGE Y SESSION STORAGE--------------


// Guardar datos
localStorage.setItem('usuario', 'JuanPerez');
// Obtener datos
let usuario = localStorage.getItem('usuario');
console.log(usuario); // 'JuanPerez'
// Eliminar datos
localStorage.removeItem('usuario');


// Guardar datos
sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');
// Obtener datos
let detalle = sessionStorage.getItem('detalleCompra');
console.log(detalle); // 'Libro de JavaScript'
// Eliminar datos al cerrar la pestaña
sessionStorage.removeItem('detalleCompra');


// --------GUARDAR DATOS COMO ARRAYS U OBJETOS---------------

//Almacenar datos complejos (como objetos o arrays);
//Para guardar objetos o arrays, primero debes convertirlos a una cadena JSON:

let usuario = {
    nombre: 'Ana',
    edad: 25
  };
  
localStorage.setItem('usuario', JSON.stringify(usuario));

let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioRecuperado.nombre); // Ana



//----EJEMPLO DE VIDEO ACERCA DEL GUARADDO EN LOCAL STORAGE------------*/

/*const saludo = document.getElementById("saludo");
const botonGuardar = document.getElementById("guardarNombre");
const botonEliminar = document.getElementById("eliminarNombre");

botonGuardar.addEventListener("click", () => {
    const nombre = prompt("Ingrese su nombre")
    if(nombre) {
        localStorage.setItem("nombreUsuario", nombre)
        saludo.textContent = `¡Hola ${nombre}!`
    }
})

botonEliminar.addEventListener("click", () => {
    localStorage.removeItem("nombreUsuario")
    saludo.textContent = `¡Hola!`
})

const nombreGuardado = localStorage.getItem("nombreUsuario")
if (nombreGuardado) {
    saludo.textContent = `¡Hola ${nombreGuardado}!`
}*/


//------------------ALMACENAMIENTO Y RECUPERADO DE DATOS DEL LOCAL STORAGE ---------------

/*let nombre = "Raul";
let edad = 40;

localStorage.setItem("nombreGuardado", nombre);
localStorage.setItem("edadGuardada", edad);

let nombreRecuperado = localStorage.getItem("nombreGuardado");
console.log(nombreRecuperado);
let edadRecuperada = parseInt(localStorage.getItem("edadGuardada"));
console.log(edadRecuperada);*/


//-----------------CONVERTIR LA ESCRITURA EN JSON EN EL STORAGE------------------

/*
// Objeto usuario
const usuario = {
    id: "1234",
    nombre: "Juan",
    correo: "juan@example.com"
  };
  
  // Convertir el objeto usuario a una cadena JSON para almacenamiento
  localStorage.setItem('usuario', JSON.stringify(usuario));
  
  // Recuperar el objeto usuario de localStorage y convertirlo de nuevo a un objeto JavaScript
  const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));
  
  console.log(usuarioAlmacenado);*/


  //---------------------OTRA FORMA DE HACERLO--------------------------------

 /* let usuario = {
    nombre: "Gonzalo",
    edad: 37
  }

  console.log(usuario);

  let usuarioJSON = JSON.stringify(usuario);
  console.log(usuarioJSON);

  localStorage.setItem(`usuario`, usuarioJSON);

  let usuarioRecuperado = localStorage.getItem(`usuario`);
  console.log(usuarioRecuperado);

  let usuariojs = JSON.parse(usuarioRecuperado);
  console.log(usuariojs);*/

//----------------------EJEMPLO CARRITO-------------------------

// Supongamos que este es el carrito de compras del usuario
const carrito = {
    items: [
        { id: 1, producto: "Libro", cantidad: 2, precio: 15.00 },
        { id: 2, producto: "Lápiz", cantidad: 10, precio: 1.50 }
    ]
};

// Convertimos el objeto carrito en una cadena JSON y lo almacenamos
localStorage.setItem('carrito', JSON.stringify(carrito));

// Recuperamos la cadena JSON del almacenamiento y la convertimos de nuevo a un objeto JavaScript
const carritoAlmacenado = JSON.parse(localStorage.getItem('carrito'));

// Ahora podemos acceder y manipular los datos del carrito como un objeto JavaScript
console.log(`Total de productos: ${carritoAlmacenado.items.length}`);



