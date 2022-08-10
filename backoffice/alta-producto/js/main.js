const botonAgregar = document.getElementById('botonAgregar')

botonAgregar.addEventListener('click', (e) => {
    cargarDatosProductos(e) // tenia la e
    guardar()
    alert("producto ingresado")
    })

const guardar =()=> {
        guardar("prodcutos", JSON.stringify(producto))
}
        /*
        for (const producto of prodcutos){
            guardar(producto, JSON.stringify(producto))
        }
    }*/

function cargarDatosProductos(e) 
{
    e.preventDefault()
    const id = document.getElementById("id").value;
    const cate = document.getElementById("cate").value;
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;
    const descri = document.getElementById("descri").value;
    const cantidad = document.getElementById("cantidad").value;
    const imag = document.getElementById("imagen").value;
    let nuevo = new Producto (id, cate, nombre, valor, descri, cantidad, imag)
    productos.push(nuevo)
    //tiene que ser en el array y no en el constructor
    console.log(productos);

}



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

