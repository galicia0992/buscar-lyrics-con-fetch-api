import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion){
        this.artista = artista
        this.cancion = cancion

        
    }
    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        console.log("desde consultar api")
        fetch(url)
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            if(data.lyrics){
                UI.mensajes.classList.remove("error")
                UI.mensajes.innerHTML = ""
                UI.headingResultado.innerHTML = UI.artista.value 
                UI.resultado.innerHTML = data.lyrics
            }else{
                UI.headingResultado.innerHTML = ""
                UI.resultado.innerHTML = ""
                UI.mensajes.classList.add("error")
                UI.mensajes.innerHTML = data.error
            }
        })
    }
}

export default API