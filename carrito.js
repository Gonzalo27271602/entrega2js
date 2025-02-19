
    //---------------CARRITO DE PRODUCTOS-------------------------

    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; //Traigo mi carrito desde el local storage

    const productos = [
        {id:1568, nombre:"Auricular", marca:"Apple", valor:452361, cuotas:6},
        {id:1846, nombre:"Smartwatch", Marca:"Apple", valor:856390, cuotas:6},
        {id:1849, nombre:"Paleta", marca:"Adidas", valor:362171, cuotas:6},
        {id:568, nombre:"Auricular", marca:"Xiaomi", valor:85000, cuotas:6},
        {id:10, nombre:"Smartwatch", marca:"Xiaomi", valor:326361, cuotas:6},
        {id:1263, nombre:"Paleta", marca:"Babolat", valor:296328, cuotas:6},
    ]

    console.log(productos[1])

    function imprimirProductos() {
        const listadoDeProductos = document.getElementById("listadoDeProductos");
        console.log(listadoDeProductos)

        listadoDeProductos.innerHTML = "";

        productos.forEach(producto => {
            const div = document.createElement("div");
            div.innerHTML = `<h3>${producto.nombre} - ${producto.marca}</h3>
                        <p>Precio: $${producto.valor}</p>
                        <p>Cuotas: ${producto.cuotas} sin interés</p>
                        <button id="${producto.id}">Comprar</button>`;

            listadoDeProductos.appendChild(div);
            
            let button = document.getElementById(`${producto.id}`)
            button.addEventListener("click", () => AgregarAlCarrito(producto.id));
        })
    }

    let agregar = document.getElementById("agregar")

    function AgregarAlCarrito(productoId) {
        //primero busco el producto a agregar por su id
        const productoElegido = productos.find(producto => producto.id === productoId);
        const verificarExistencia = carrito.some(producto => producto.id === productoId);
        if(!verificarExistencia) {
            carrito.push({...productoElegido, cantidad: 1});

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert("Se agrego producto al carrito");
            console.log(carrito);
        }
        else {
            alert("El producto ya se encuentra en el carrito")
        }
    }


    let eliminar = document.getElementById("eliminar")

    function EliminarProdcuto() {
        const verificarExistencia = carrito.some(productos => productos.id === productos.id);
        if(verificarExistencia){
            //let EliminarProdcuto = productos.pop();
            carrito.pop({productos})
            alert("Se eliminó el prodcuto del carrito")
            console.log(carrito);
        }
        else {
            alert("El producto no se encuentra en el carrito")
        }
    }

    imprimirProductos();

//------------HASTA ACA FUNCIONA BIEN. PERO PARA UN SOLO PRODUCTO------------------
/*

const total = carrito.reduce((acumulador, articulo) => acumulador + productos.precio, 0);
alert(`Este es el costo total ${total}`);


eliminar.addEventListener("click", EliminarProdcuto);


const totalArticulo = productos.reduce((contador, articulo) => contador += `${articulo.precio * articulo.cantidad}`)
alert(`Este es el listado de productos ${carritoDeProductos}`);


const carritoDeProductos = productos.reduce((contador, articulo) => contador += `${articulo.id} - ${articulo.nombre} - ${articulo.precio} - ${articulo.cantidad} - ${totalArticulo}} \n`, "");
alert(`Esta es la lista de productos ${articulo.id}`);
const totalCarrito = carrito.reduce((contador) => contador += `${articulo.precio}`);



//--------------------------- LOGIN USUARIO Y CONTRASEÑA--------------------------

const usuario = "Gonzalo";
const contraseña = "0000";
let intentos = 3;

while (intentos > 0) {
    let usuarioingresado = prompt("Ingrese su usuario:");
    let contraseñaingresada = prompt("Ingrese su contraseña:");

    if (usuarioingresado === usuario && contraseñaingresada === contraseña) {
        alert(`Bienvenido ${usuario}`);
        break;
    }
    else {
        intentos--;
        if (intentos > 0) {
            alert(`Usuario o contraseña incorrectos`);
        } else {
            alert("Se bloqueó el ingreso por demasiados intentos fallidos.");
        }
    }
}
*/