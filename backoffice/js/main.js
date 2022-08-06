const productos = [
    {sku: 1, categoria: "placas de video", nombreProdu: " pepito vidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
    {sku: 2, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
    {sku: 3, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
    {sku: 4, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 104.500, descripcion: "Notebook super elegante", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
    {sku: 5, categoria: "placas de video", nombreProdu: "Nvidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
    {sku: 6, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
    {sku: 7, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
    {sku: 8, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 104.500, descripcion: "Notebook super elegante", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
]

const catalogoProdu = new CatalogoProdu(productos)


const categorias = ["placas de Video", "mother", "Notebooks", "monitores" ]

const contenedorCarrito = document.getElementById('carritoContenedor')
const botonVaciar = document.getElementById('vaciarCarrito')

let carrito = []

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

ingProd()
listarPro()
modPro()
busPro()
fin()


    const btn = document.getElementById("botonCrearProd")
    btn.addEventListener("click", (e)=>{
        cargarDatosProductos(e)
        alert("producto ingresado")
    })


function ingProd()
{
    const btn = document.createElement("button")
    btn.innerText="ALTA PRODUCTO"
    btn.classList.add("button")
    btn.addEventListener("click", ()=>
    {
        window.location.href="../backoffice/altaProducto.html"
     //   cargarDatosProductos();
    });
 const adminNode = document.getElementById("CargaProd")
 adminNode.appendChild(btn); //cuando oculeto me muestro los otros botones
}




function cargarDatosProductos(e)
{
    e.preventDefault()
    const id = document.getElementById("id").value;
    alert(id)
    const cate = document.getElementById("cate").value;
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;
    const descri = document.getElementById("descri").value;
    const cantidad = document.getElementById("cantidad").value;
    const imag = document.getElementById("imagen").value;
    let nuevo = new Producto (id, cate, nombre, valor, descri, cantidad, imag)
    catalogoProdu.agregarProd(nuevo)//tiene que ser en el array y no en el constructor
    alert("Producto ingresado")
    console.log(productos);
/*
    id = prompt("Ingrese el ID: ");
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    imag = prompt("Ingrese la imagen: ");*/

}


function listarPro()
{
    const btn = document.createElement("button")
    btn.innerText="LISTAR"
    btn.classList.add("button")
    btn.addEventListener("click", ()=>
    {
        listarProducto();
    });
    const adminNode = document.getElementById("Mostrar")
    adminNode.appendChild(btn);  
}

function modPro()
{
    const btn = document.createElement("button")
    btn.innerText="MODIFICAR"
    btn.classList.add("button")
    btn.addEventListener("click", ()=>
    {
        modificar();
    });
    const adminNode = document.getElementById("Modificar")
    adminNode.appendChild(btn);  
}

function busPro()
{
    const btn = document.createElement("button")
    btn.innerText="BUSCAR"
    btn.classList.add("button")
    btn.addEventListener("click", ()=>
    {
        let nombreABuscar = prompt ("Ingrese el id a buscar")
        catalogoProdu.buscarProdu(nombreABuscar);
    });
    const adminNode = document.getElementById("Buscar")
    adminNode.appendChild(btn);  
}



function fin()
{
    const btn = document.createElement("button")
    btn.innerText="SALIR"
    btn.classList.add("button")
    btn.addEventListener("click", ()=>
    {
        salir();
    });
    const adminNode = document.getElementById("Finalizar")
    adminNode.appendChild(btn);  
}

function salir (){
    alert("Saludos");

}





function modificar () {
    window.location.href="../backoffice/modificarProducto.html"
    const cate = document.getElementById("cate").value;
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;
    const descri = document.getElementById("descri").value;
    const cantidad = document.getElementById("cantidad").value;
    const imag = document.getElementById("imagen").value;
/*
    idModificar = prompt ("Ingrese el id del producto: ")
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    imag = prompt("Ingrese la imagen: ");*/
    catalogoProdu.modificarProdu(idmodificar, cate, nombre, valor, descri, cantidad, imag)
    }



function listarProducto() {

    const nodoPrincipal = document.getElementById("contenedorProductos")
    nodoPrincipal.innerHTML="";
    catalogoProdu.productos.forEach((producto)=>{

        const divProducto = document.createElement("div")
        divProducto.className=" col-lg-3 col-md-4 col-sm-6 "
        divProducto.innerHTML=`
                    <div class="marcoProducto">
                        <div class="imagenProducto">
                            <img src=${producto.imagen}>
                        </div>
                        <div class="textoProducto">
                            <p>${producto.nombreProdu}</p>
                            <p>$${producto.precio}</p>
                            <hr>
                            <div class="botonComprar" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <button id="agregar${producto.sku}" class="button" <i class="fas fa-shopping-cart"></i>COMPRAR</button><i class="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                    </div> `
        nodoPrincipal.appendChild(divProducto);
        //document.body.appendChild()

        const botonAgregar = document.getElementById('agregar${producto.sku}')
        boton.addEventListener('click', () => {
        agregarAlCarrito(producto.sku)
        })
    })
}



const agregarAlCarrito = (prodId) => {
    const Item = catalogoProdu.productos.find((producto) => producto.sku === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}


const eliminarDelCarrito = (prodId) => {
    const Item = carrito.find((producto) => producto.sku === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}



const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=""
    carrito.forEach((producto) => {
        const div = document.createElement('div')
        //aca iria el css del carrito div.className= ('el nombre de la clase del css')
        div.innerHTML = `
        <p>${producto.nombreProdu}</p>
        <p>Precio:$ ${producto.precio}</p>
        <p>cantidad: <span id="cantidad">${producto.stock}</span> </p>
        <button onclick = "eliminarDelCarrito((${producto.sku})" class="botonComprar"><i class="fas fa-trash-alt"></button>

        `
        contenedorCarrito.appendChild(div)

    })
    contenedorCarrito.innerHTML = carrito.length
}


/*
function cobrar (monto) {
    alert (`El total a abonar es de ${monto}`)
    let recibo = Number(prompt(`Ingrese el dinero que desea abonar`))
    if (recibo>monto || recibo==monto){
        alert(`Su vuelto es $ ${recibo-monto}`)
    }
    else if (recibo<monto){
        alert(`El dinero recibido es inferior al valor de la compra, restan $ ${monto-recibo}`)
        while (recibo<monto){
            let pedir = Number(prompt(`Ingrese el dinero restante`))
            recibo = recibo + pedir
            alert(`Restan $ ${monto-recibo}`)
        }
        alert(`Su vuelto es $ ${recibo-monto}`)
    }
}
*/

/*
//-------------------login---------
botonLogin ()

function botonLogin(){
    const btn = document.getElementById("btnLogin")
    btn.addEventListener("click", ()=>{
        procesoLogin()
    })
}

function procesoLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username ==="" || password===""){
        alert("Ingrese los datos correctamente")
    } else if (username ==="admin" && password ==="admin"){
        mostrarBackoffice()

    }else {
        alert("nombre de usuario o password incorrecto")
    }
}


function mostrarBackoffice(){
    window.location.href="../backoffice/index.html"
}
//-------

*/