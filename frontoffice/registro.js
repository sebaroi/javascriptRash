debugger


const usuarios = [
    {usernameLogin: "admin", passwordLogin: "admin", userEmailLogin:"admin@gmail.com" },
    {usernameLogin: "test", passwordLogin: "clavetest123",userEmailLogin:"test@hotmail.com" },
    {usernameLogin: "roco4080", passwordLogin: "telefono123", userEmailLogin:"rocco48@hotmail.com"},
  ]
/* 
    const btn = document.getElementById("botonRegistrarse")
    btn.addEventListener("click", ()=>{
        window.location.href="../frontoffice/registro.html"
        registrarse()
    }) */


let nuevoUsuario=[]

if (localStorage.getItem('usuarios') == null || localStorage.getItem('usuarios') == 'null')
    localStorage.setItem('usuarios',  JSON.stringify(usuarios))
nuevoUsuario= localStorage.setItem('usuarios',  JSON.stringify(usuarios))



function registrarse (){
    nomUsuario = document.getElementById ("usernameLogin").value;
    passUsuario = document.getElementById ("passwordLogin").value;
    repetirpassUsuario = document.getElementById ("repetirpasswordLogin").value;
    userEmail = document.getElementById ("userEmailLogin").value;



    if (nomUsuario == ""){
        alert("Nombre de usuario requerido.");
        return ;
    }
    else if (userEmail == ""){
        alert("Mail requerido.");
        return ;
    }
    else if (passUsuario == ""){
        alert("Password requerido.");
        return ;
    }
    else if (repetirpassUsuario == ""){
        alert("Password requerido.");
        return ;
    }
    else if ( passUsuario != repetirpassUsuario ){
        alert("La clave no coincide");
        return;
    }
     else if(usuarios.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(nomUsuario + "  Registro completo, Ya puede ingresar");

        document.getElementById ("usernameLogin").value="";
        document.getElementById ("passwordLogin").value="";
        document.getElementById ("repetirpasswordLogin").value="";
        document.getElementById ("userEmailLogin").value="";
    }
    else{
        alert(nomUsuario + " El usuario ya existe.");
        return ;
    } 
}


//nuevoUsuario = usuarios
//registro()


 /*   if(passUsuario ===repetirpassUsuario && legales==true){
    nuevoUsuario = localStorage setItem('usuarios')

   }alert("el password es diferente // marque la casilla de acpetacion") */
   let encontrado = false
   let i = 0


    const btn = document.getElementById("registrar")
    btn.addEventListener("click", ()=>{

        while (!encontrado && i < usuarios.length ){
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

