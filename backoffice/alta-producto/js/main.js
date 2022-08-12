const botonAgregar = document.getElementById('botonAgregar')

botonAgregar.addEventListener('click', (e) => {
    cargarDatosProductos(e) // tenia la e
    alert("producto ingresado")
    })

/*const guardar =()=> {
        guardar("prodcutos", JSON.stringify(producto))
}
        /*
        for (const producto of prodcutos){
            guardar(producto, JSON.stringify(producto))
        }
    }*/


   document.addEventListener('DOMContentLoaded', () => {
       // if (localStorage.getItem('productos')){
           // catalogo = JSON.parse(localStorage.getItem('productos'))
         //   listarProducto() 
    //    }
    })
    


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

    let vdsdal= JSON.parse(localStorage.getItem('productos'));
    vdsdal.push(nuevo)
    localStorage.setItem('productos',  JSON.stringify( vdsdal))

    window.location.href="../../backoffice/index.html"
    


    //tiene que ser en el array y no en el constructor
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





