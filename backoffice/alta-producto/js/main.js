const botonAgregar = document.getElementById('botonAgregar')

botonAgregar.addEventListener('click', (e) => {
    cargarDatosProductos(e) // tenia la e
    alert("producto ingresado")
    })


    /*
const botonPrin = document.getElementById('botonPrin')
botonPrin.addEventListener('click', () => {
    window.location.href="../../backoffice/js/index.html"
    })

*/

/*
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
*/

function cargarDatosProductos(e) // si saco la variable e 
{
    //preventDefault() //.e.preventDefault()
    // alert("inicio")
    e.preventDefault()
    const id = document.getElementById("id").value;
    const cate = document.getElementById("cate").value;
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;
    const descri = document.getElementById("descri").value;
    const cantidad = document.getElementById("cantidad").value;
    const imag = document.getElementById("imagen").value;
    let nuevo = new Producto (id, cate, nombre, valor, descri, cantidad, imag)
    // alert(nuevo)
    productos.push(nuevo)
    //tiene que ser en el array y no en el constructor

    // alert("Producto ingresado")
    console.log(productos);

}

/*
    const btn = document.getElementById("botonAgregar")
    btn.addEventListener("click", () =>{
        cargarDatosProductos()
        alert("producto ingresado")
    })

*/


/*
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
*/


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



    
    
 









/*
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
        let element= `agregar${producto.sku}`

        const botonAgregar = document.getElementById(element)
        botonAgregar.addEventListener('click', () => {
        agregarAlCarrito(producto.sku)
        })
    })
}

*/


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

