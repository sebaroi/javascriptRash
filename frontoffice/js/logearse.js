
window.addEventListener("load",()=>{
let ingresar= document.getElementById("ingresar")
let logout= document.getElementById("logout")
let estoyLogueado = sessionStorage.getItem('usuarioLog')
if (estoyLogueado){
    ingresar.style.display = 'none';
    logout.style.display = 'block';
/*     document.getElementById("botonCarrito").style.display = 'block' */
} else {
    ingresar.style.display = 'block';
    logout.style.display = 'none';
/*     document.getElementById("botonCarrito").style.display = 'none' */
}

/* -------------------------------para el logout------------------- */
logout.addEventListener("click",()=>{
    sessionStorage.removeItem('usuarioLog')
    localStorage.removeItem('carrito')
    localStorage.setItem('carrito',  JSON.stringify([]))
    location.reload()
})

})



/* -------------------------------para el login------------------- */

let nomUsuario = ""
let passUsuario =""
let repetirpassUsuario =""
let userEmail =""


if(localStorage.getItem('usuarios') == null || localStorage.getItem('usuarios') == 'null')
    localStorage.setItem('usuarios',  JSON.stringify(usuarios))


    const btn = document.getElementById("botonIngresar")
    btn.addEventListener("click", ()=>{
        procesoLogin()
    })

let encontrado = false

function procesoLogin(){

do {
    nomUsuario = document.getElementById("usernameLogin").value;
    passUsuario = document.getElementById("passwordLogin").value;
    if (nomUsuario ==="" || passUsuario===""){
        alert("Ingrese los datos correctamente")
        botonLogin()
    }
    }
while ((nomUsuario ==="" || passUsuario===""))

arrayDeUsuarios = JSON.parse(localStorage.getItem('usuarios'))

encontrado = false
let i = 0
while (!encontrado && i < arrayDeUsuarios.length ){
    if (arrayDeUsuarios[i].usernameLogin==nomUsuario && arrayDeUsuarios[i].passwordLogin==passUsuario){
        encontrado = true
        let usuarioLogeado= arrayDeUsuarios[i].usernameLogin
        sessionStorage.setItem('usuarioLog',  JSON.stringify(usuarioLogeado))
    } 
    else {
        i++   
    }
}

if (encontrado){
    if (nomUsuario== "admin"){
        window.location.href="../backoffice/index.html"
    } else {
        window.location.href="../frontoffice/principal.html"
    }
    
} else {
    alert("Nombre de usuario o contraseña incorrecto")
    botonLogin()
}
}



/* /* /* /* -------------------------------para el registro------------------- */


botonRegistro ()


function botonRegistro(){
    const btn = document.getElementById("botonRegistrarse")
    btn.addEventListener("click", ()=>{
        window.location.href="../frontoffice/registro.html"
        registrarse()
    })
}



finalizarCompra.addEventListener('click', () => {
if (encontrado == false){
    alert("Usted necesita estar logueado")

}
/* 
    window.location.href='finalizarCompra.html'
     if (encontrado){
        window.location.href='finalizarCompra.html'
    }alert("necesita loguearse") */
    })
