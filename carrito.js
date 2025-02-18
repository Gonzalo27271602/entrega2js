
/*
const carrito = []
const productos = [
    {id:1568, nombre:"Auricular", Marca:"Apple", Valor:452361, Cuotas:6},
    //{id:1846, nombre:"Smartwatch", Marca:"Apple", Valor:856390, Cuotas:6},
    //{id:1849, nombre:"Paleta", Marca:"Adidas", Valor:362171, Cuotas:6},
    //{id:568, nombre:"Auricular", Marca:"Xiaomi", Valor:85000, Cuotas:6},
    //{id:10, nombre:"Smartwatch", Marca:"Xiaomi", Valor:326361, Cuotas:6},
    //{id:1263, nombre:"Paleta", Marca:"Babolat", Valor:296328, Cuotas:6},
]

let agregar = document.getElementById("agregar")

function AgregarAlCarrito() {
    const verificarExistencia = carrito.some(producto => producto.id === producto.id);
    if(!verificarExistencia) {
        carrito.push({productos, cantidad: 1});
        alert("Se agrego producto al carrito");
        console.log(carrito);
    }
    else {
        alert("El producto ya se encuentra en el carrito")
    }
}

agregar.addEventListener("click", AgregarAlCarrito)

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

const total = carrito.reduce((acumulador, articulo) => acumulador + productos.precio, 0);
alert(`Este es el costo total ${total}`);


eliminar.addEventListener("click", EliminarProdcuto);

/*
const totalArticulo = productos.reduce((contador, articulo) => contador += `${articulo.precio * articulo.cantidad}`)
alert(`Este es el listado de productos ${carritoDeProductos}`);


const carritoDeProductos = productos.reduce((contador, articulo) => contador += `${articulo.id} - ${articulo.nombre} - ${articulo.precio} - ${articulo.cantidad} - ${totalArticulo}} \n`, "");
alert(`Esta es la lista de productos ${articulo.id}`);
const totalCarrito = carrito.reduce((contador) => contador += `${articulo.precio}`);
*/

//--------------------------- LOGIN USUARIO Y CONTRASEÑA--------------------------


const usuario = "Gonzalo";
const contraseña = "0000";
let intentos = 3;

while (intentos > 0) {
    let usuarioingresado = prompt("Ingrese su usuario:");
    let contraseñaingresada = prompt("Ingrese su contraseña:");

    if (usuarioingresado === usuario && contraseñaingresada === contraseña) {
        alert("Bienvenido a la tierra prometida!");
        break;
    }
    else {
        alert(`Usuario o contraseña incorrectos`);
    }
}
