//creo el array productos
class CatalogoProdu {
    constructor(productos) {
        this.productos = productos
    }

    
/*     agregarProd(producto){
        this.productos.push(producto)
        alert("Producto ingresado con Éxito")
    }
 */
}

/* buscarProdu (nombreABuscar){
    let produEncontrado = this.productos.some((producto) =>
    producto.sku==(nombreABuscar))

    if (produEncontrado == true) {
        alert("El producto existe.")    
        let filtro = this.productos.filter((producto) =>
        producto.sku==(nombreABuscar))
        console.table("Resultado del criterio de busqueda", filtro);
    }
    else {
        alert("No existe el producto")
    }
}
 */


/* modificarProdu(produABuscar, id, categoria, nombreProdu, precio, descripcion, stock, imagen)
{
    let busca = this.productos.find((producto) =>
        producto.sku==(produABuscar))
    
    if(busca)
    {
        busca.sku=id;
        busca.categoria=categoria;
        busca.nombreProdu=nombreProdu;
        busca.precio=precio;
        busca.descripcion=descripcion;
        busca.stock=stock;
        busca.imagen=imagen;
    }
    else{
        alert("El producto no existe")
    }      
}

}
 */


