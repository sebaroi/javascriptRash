let aModificar;


 window.onload=()=> {
  modificarProducto()
} 

function modificarProducto(){
    Swal.fire({
        title: "Modificar un Producto",
        text: "Ingrese el ID del producto a modificar:",
        input: 'number',
        showCancelButton: true,
        cancelButtonText: "CANCELAR"
      }).then((result) => {
        let nuevoId = result.value
        if (nuevoId != undefined) {
          let modificarProducto = productos.find(productos => productos.sku == nuevoId)
          if (modificarProducto) {
            Swal.fire({
              title: "Modificar Producto",
              text: `¿Esta seguro ?`,
              icon: "warning",
              showCancelButton: true,
              cancelButtonText: "CANCELAR"
            })

            aModificar = modificarProducto            
            document.getElementById("cate").value = modificarProducto.categoria            
            document.getElementById("nombre").value = modificarProducto.nombreProdu
            document.getElementById("valor").value = modificarProducto.precio            
            document.getElementById("descri").value += modificarProducto.descripcion           
            document.getElementById("cantidad").value = modificarProducto.stock   
            document.getElementById("posicion").value = modificarProducto.posicion          
            document.getElementById("imagen").value = modificarProducto.imagen      
            localStorage.setItem('productos',  JSON.stringify(productos))      
          } else {
            Swal.fire("Producto no encontrado", "El codigo ingresado no corresponde a ningun producto", "error")
          }
        }
      })
    }


const botonModificar = document.getElementById('botonModificar')

botonModificar.addEventListener('click', (e) => {
    modificarProd(e) 
    Swal.fire('Producto modificado')
    })


function modificarProd(e) 
{
    e.preventDefault()
    let vdsdal= JSON.parse(localStorage.getItem('productos'));
    let modi = vdsdal.map(prod =>{
        if(prod.sku ==aModificar.sku){
      return prod = {
        categoria : document.getElementById("cate").value,
        nombreProdu : document.getElementById("nombre").value,
        precio : Number(document.getElementById("valor").value),
        descripcion : document.getElementById("descri").value,
        stock : Number(document.getElementById("cantidad").value),
        posicion: document.getElementById("posicion").value,
        imagen : document.getElementById("imagen").value
        }
        }
        return prod;
        })
    localStorage.setItem('productos',  JSON.stringify(modi))
    window.location.href="../../backoffice/index.html"
}






