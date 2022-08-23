window.addEventListener("load",()=>{
    fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>{
            return res.json()
        })
        .then((inf)=>{
            let rickMortyApi = document.querySelector("#personajes")
            console.log(inf.results)
            let personajes = inf.results

            
            personajes.forEach(personaje => {
                rickMortyApi.innerHTML += "<img src="+personaje.image+">" 

                rickMortyApi.innerHTML += "<li>"+ " "+ personaje.name  +"</li>"
            })
        })
        .catch((e)=>{
            alert("Error! Intente mas tarde!")
        })
})