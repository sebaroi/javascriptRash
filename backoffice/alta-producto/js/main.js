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
        imagen : document.getElementById("imagen").value
        }
    

    let vdsdal= JSON.parse(localStorage.getItem('productos'));
    vdsdal.push(nuevo)
    localStorage.setItem('productos',  JSON.stringify( vdsdal))

    window.location.href="../../backoffice/index.html"
    
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





