const botonAgregar = document.getElementById('botonAgregar')

botonAgregar.addEventListener('click', (e) => {
    cargarDatosProductos(e) 
    Swal.fire('Producto ingresado')
    })




function cargarDatosProductos(e) 
{
    e.preventDefault()
    let nuevo = { 
        sku : Number (document.getElementById("id").value),
        categoria : document.getElementById("cate").value,
        nombreProdu : document.getElementById("nombre").value,
        precio : Number(document.getElementById("valor").value),
        descripcion : document.getElementById("descri").value,
        stock : Number(document.getElementById("cantidad").value),
        posicion : document.getElementById("posicion").value,
        imagen : document.getElementById("imagen").value
        }
    

    let vdsdal= JSON.parse(localStorage.getItem('productos'));
    vdsdal.push(nuevo)
    localStorage.setItem('productos',  JSON.stringify( vdsdal))

    window.location.href="../../backoffice/index.html"
    
}

