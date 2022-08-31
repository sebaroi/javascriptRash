debugger

/*
const usuarios = [
    {usernameLogin: "admin", passwordLogin: "admin", userEmailLogin:"admin@gmail.com" },
    {usernameLogin: "test", passwordLogin: "clavetest123", userEmailLogin:"test@hotmail.com" },
    {usernameLogin: "roco4080", passwordLogin: "telefono123", userEmailLogin:"rocco48@hotmail.com"},
]
*/

let nuevoUsuario=[]
let nomUsuario=""
let passUsuario=""
let repetirpassUsuario=""
let userEmail=""


//if (localStorage.getItem('usuarios') == null || localStorage.getItem('usuarios') == 'null')
//localStorage.setItem('usuarios',  JSON.stringify(usuarios))

function registrarse (){
   // e.preventDefault()
    let nuevo = {
        usernameLogin : document.getElementById ("usernameLogin").value,
        passwordLogin : document.getElementById ("passwordLogin").value,
        repetirpasswordLogin : document.getElementById ("repetirpasswordLogin").value,
        userEmailLogin : document.getElementById ("userEmailLogin").value
    }

    if (nuevo.nomUsuario == ""){
        alert("Nombre de usuario requerido.");
        return ;
    }
    else if (nuevo.userEmail == ""){
        alert("Mail requerido.");
        return ;
    }
    else if (nuevo.passUsuario == ""){
        alert("Password requerido.");
        return ;
    }
    else if (nuevo.repetirpassUsuario == ""){
        alert("Password requerido.");
        return ;
    }
    else if ( nuevo.passUsuario != nuevo.repetirpassUsuario ){
        alert("La clave no coincide");
        return;
    }
    else {
    let nuevoUsuario= JSON.parse(localStorage.getItem('usuarios'));
    nuevoUsuario.push(nuevo)
    localStorage.setItem('usuarios',  JSON.stringify( nuevoUsuario))

        alert(nomUsuario + "  Registro completo, Ya puede ingresar");

        document.getElementById ("usernameLogin").value="";
        document.getElementById ("passwordLogin").value="";
        document.getElementById ("repetirpasswordLogin").value="";
        document.getElementById ("userEmailLogin").value="";
    } 
    window.location.href='principal.html'
/*     else{
        alert(nomUsuario + " El usuario ya existe.");
        return ;
    }  */

}


let encontrado = false
let i = 0


const btn = document.getElementById("registrar")
btn.addEventListener("click", ()=>{
    registrarse ()

})

 /*        while (!encontrado && i < usuarios.length ){
            if (usuarios[i].usernameLogin==nomUsuario){
                encontrado = true
                alert("usuario existente, agregue otro usuario")
                registrarse ()
            } 
            else {
                i++   
                alert("usuario y contrasela incorretcto")
            }
        }


        if (passUsuario ==""){
    Swal.fire('Ingrese su password')
}
if (userEmail ==""){
    Swal.fire('Re-Ingrese su password')
}
if (userEmail ==""){
    Swal.fire('Ingrese su Email')
}

        if (nomUsuario ==="" || passUsuario==="" || repetirpassUsuario==="" || userEmail===""){
            alert("Ingrese los datos correctamente")
            registrarse()
        }
alert("datos registrados")
nuevoUsuario.localStorage.setItem('usuarios')

        window.location.href="../frontoffice/principal.html"
       // registrarse()
    })

 */