const productos = [
    {sku: 1, categoria: "placas de video", nombreProdu: "Nvidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
    {sku: 2, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
    {sku: 3, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
    {sku: 4, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 104.500, descripcion: "Notebook super elegante", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
]

const catalogoProdu = new CatalogoProdu(productos)


const categorias = ["placas de Video", "mother", "Notebooks", "monitores" ]

ingProd()
listarPro()
modPro()
busPro()
fin()


function ingProd()
{
    const btn = document.createElement("button")
    btn.innerText="ALTA PRODUCTO"
    btn.classList.add("button")
    btn.addEventListener("click", ()=>
    {
        cargarDatosProductos();
    });
    const adminNode = document.getElementById("Cargaprod")
    adminNode.appendChild(btn);
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


function mostrarCargarPregunta()
{
    const formulario = document.createElement("form"); 
    const inputPregunta = document.createElement("input");
    inputPregunta.setAttribute("id", "inputPregunta")
    inputPregunta.addEventListener("keydown", (event)=>{
            if(event.key==='k')
            {
                event.preventDefault();
                alert("SU COMPUTADOR VA A EXPLOTAR");
            }
    })
    formulario.appendChild(inputPregunta);
    const submitBtn = document.createElement("input")
    submitBtn.setAttribute("type", "submit");
    submitBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        if(inputPregunta.value==="")
        {
            alert("COMPLETE SU FORMULARIO")
        }
        else
        {
            alert("VAMOS A PROCEDER")
            inputPregunta.value="";
        }
        
    })
    formulario.appendChild(submitBtn);
    const nodo = document.getElementById("mainContent");
    nodo.appendChild(formulario);

}



let precioCompra = 0

function vender (){
    venta = prompt(`Ingrese el ID del producto: `)
    catalogoProdu.comprarProducto(venta)
    }




function cargarDatosProductos()
{
    id = prompt("Ingrese el ID: ");
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    imag = prompt("Ingrese la imagen: ");
    let nuevo = new Producto (id, cate, nombre, valor, descri, cantidad, imag)
    catalogoProdu.agregarProd(nuevo)//tiene que ser en el array y no en el constructor
}



function modificar () {
    idmodificar = prompt ("Ingrese el id del prodcuto: ")
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    imag = prompt("Ingrese la imagen: ");
    catalogoProdu.modificarProdu(idmodificar, cate, nombre, valor, descri, cantidad, imag)
    }




function listarProducto() {

    const nodoPrincipal = document.getElementById("contenedor")
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
                                <button class="button">COMPRAR</button>
                            </div>
                        </div>
                    </div> `
        nodoPrincipal.appendChild(divProducto);

        //document.body.appendChild()a
    })
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

