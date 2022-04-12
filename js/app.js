import * as UI from './interfaz.js'
import API from './api.js'

console.log(UI)

UI.formularioBuscar.addEventListener("submit", buscarCancion)

function buscarCancion(e){
    e.preventDefault()

    
    if(UI.artista.value == "" && UI.cancion.value == ""){
        UI.mensajes.classList.add("error")
        UI.mensajes.innerHTML = "favor de llenar todos los campos"
    }else if(UI.artista.value == ""){
        UI.mensajes.classList.add("error")
        UI.mensajes.innerHTML = "favor de llenar el campo artista"
    }else if(UI.cancion.value == ""){
        UI.mensajes.classList.add("error")
        UI.mensajes.innerHTML = "favor de llenar el campo cancion"
        
    }

    
    const busqueda = new API(artista.value, cancion.value)
    busqueda.consultarAPI()
    
}