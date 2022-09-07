

let nuevoUsuario=[]
let nomUsuario=""
let passUsuario=""
let repetirpassUsuario=""
let userEmail=""



function registrarse (){
    let nuevo = {
        usernameLogin : document.getElementById ("usernameLogin").value,
        passwordLogin : document.getElementById ("passwordLogin").value,
        repetirpasswordLogin : document.getElementById ("repetirpasswordLogin").value,
        userEmailLogin : document.getElementById ("userEmailLogin").value
    }

    if (nuevo.usernameLogin == ""){
        Swal.fire('Nombre de usuario requerido.');
        return ;
    }
    else if (nuevo.userEmailLogin == ""){
        Swal.fire('Mail requerido.');
        return ;
    }
    else if (nuevo.passwordLogin == ""){
        Swal.fire('Password requerido.');
        return ;
    }
    else if (nuevo.repetirpasswordLogin == ""){
        Swal.fire('Password requerido.');
        return ;
    }
    else if ( nuevo.passwordLogin != nuevo.repetirpasswordLogin ){
        Swal.fire('La clave no coincide');
        return;
    }
    else {
    let nuevoUsuario= JSON.parse(localStorage.getItem('usuarios'));
    nuevoUsuario.push(nuevo)
    localStorage.setItem('usuarios',  JSON.stringify( nuevoUsuario))

    Swal.fire('Felicitaciones, ya sos parte de esta gran familia')

        document.getElementById ("usernameLogin").value="";
        document.getElementById ("passwordLogin").value="";
        document.getElementById ("repetirpasswordLogin").value="";
        document.getElementById ("userEmailLogin").value="";
    } 
    window.location.href='../principal.html'
}


let encontrado = false
let i = 0


const btn = document.getElementById("registrar")
btn.addEventListener("click", ()=>{
    registrarse ()

})


