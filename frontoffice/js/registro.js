
let nuevoUsuario=[]
let nomUsuario=""
let passUsuario=""
let repetirpassUsuario=""
let userEmail=""
    let formRegistro=""




    let nuevo = {
        usernameLogin : document.getElementById ("usernameLogin").value,
        passwordLogin : document.getElementById ("passwordLogin").value,
        repetirpasswordLogin : document.getElementById ("repetirpasswordLogin").value,
        userEmailLogin : document.getElementById ("userEmailLogin").value
    }


    cuidado = document.getElementById("cuidado")
    formRegistro = document.getElementById("formRegistro")
    formRegistro.addEventListener("submit", (e) => {
        e.preventDefault()
        let cuidado=""
        let entrar = false
        let regexEmail=/^w+ ([.-]?w+)*@w+ ([.-]?w+)* (.w {2,3,4})+$/
        if (usernameLogin.lenght <6){
            cuidado +=`El nombre de usuario tiene que tener 6 caracterecteres como minimo. <br>`
            entrar= true
        }
        if(!regexEmail.test(userEmailLogin)){
            cuidado +=`El mail no es valido. <br>` 
            entrar= true
        }
        if (passwordLogin != repetirpasswordLogin ){
            cuidado += `Contraseña incorrecta`
            entrar= true
        }
        if (entrar){
            cuidado.innerHTML = cuidado
        }

    })
    



/*     if (nuevo.nomUsuario == ""){
        Swal.fire('Nombre de usuario requerido.')
        return ;
    }
    else if (nuevo.userEmail == ""){
        Swal.fire('Mail requerido.')
        return ;
    }
    else if (nuevo.passUsuario == ""){
        Swal.fire('Password requerido.')

        return ;
    }
    else if (nuevo.repetirpassUsuario == ""){
        Swal.fire('Password requerido.')
        return ;
    }
    else if ( nuevo.passUsuario != nuevo.repetirpassUsuario ){
        Swal.fire('La clave no coincide')
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
    window.location.href="../principal.html"
}


let encontrado = false
let i = 0

const btn = document.getElementById("registrar")
btn.addEventListener("click", ()=>{
    registrarse ()
})


 */




/* 
function validacion(){

    if( nuevo.nomUsuario == null || /^\s+$/.test(nuevo.nomUsuario) ) {
        Swal.fire('Nombre de usuario requerido.')
        return false;

}else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(nuevo.userEmailLogin)) ) {
    Swal.fire('Mail incorrecto.')
    return false;

}else if( nuevo.passwordLogin == null || /^\s+$/.test(nuevo.passwordLogin) ) {
    Swal.fire('Nombre de usuario requerido.')
    return false;

} else if( nuevo.repetirpasswordLogin == null || /^\s+$/.test(nuevo.repetirpasswordLogin) ) {
    Swal.fire('Nombre de usuario requerido.')
    return false;

}else if (nuevo.passwordLogin != nuevo.repetirpasswordLogin){
    Swal.fire('las contraseñas no coinciden.')
    return false;
}
} */