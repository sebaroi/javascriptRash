
let nuevoUsuario=[]
let nomUsuario=""
let passUsuario=""
let repetirpassUsuario=""
let userEmail=""



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
}


let encontrado = false
let i = 0


const btn = document.getElementById("registrar")
btn.addEventListener("click", ()=>{
    registrarse ()

})

