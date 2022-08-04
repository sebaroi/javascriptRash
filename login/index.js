botonLogin ()

function botonLogin(){
    const btn = document.getElementById("btnLogin")
    btn.addEventListener("click", ()=>{
        procesoLogin()
    })
}

function procesoLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username ==="" || password===""){
        alert("Ingrese los datos correctamente")
    } else if (username ==="admin" && password ==="admin"){
        mostrarBackoffice()

    }else {
        alert("nombre de usuario o password incorrecto")
    }
}


function mostrarBackoffice(){
    window.location.href="../backoffice/index.html"
}






