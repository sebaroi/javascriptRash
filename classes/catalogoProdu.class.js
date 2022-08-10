//creo el array productos
class CatalogoProdu {
    constructor(productos) {
        this.productos = productos
    }

    
    agregarProd(producto){
        this.productos.push(producto)
        alert("Producto ingresado con Éxito")
    }

    listarProdu(){
        this.productos.forEach((producto) => {
            console.log("Item",producto);
    })
}

buscarProdu (nombreABuscar){
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



modificarProdu(produABuscar, id, categoria, nombreProdu, precio, descripcion, stock, imagen)
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



/*
comprarProducto(id){
    let precioCompra = 0
    let total =0
    let buscarP = this.productos.find((producto) =>
    producto.sku.includes(id))
if(buscarP)
{
    cantidad =prompt("Cuantos productos desea comprar: ")
        if (cantidad <= buscarP.stock){
            alert(buscarP.precio)
            buscarP.stock = buscarP.stock - cantidad
            precioCompra = buscarP.precio * cantidad
            total = precioCompra + total
            alert ("el monto a abonar es " + total, "Quedan en stock " + buscarP.stock )
}
else{
    alert("El producto no existe")
} 
}
}

*/

