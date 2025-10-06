function Yoshi(){
    let nom = prompt("COMO QUIERES LLAMARTE :)?")
    document.getElementById("nom").innerHTML= "NOM: "+nom;
}
function canvifoto(){
    let foto =prompt("Que quieres ser ;)?");
    document.getElementById("foto").src = foto
}    
function Invisible(){
    document.getElementById("foto").style = "display: none"
    }

function canviafons(){
let body = document.getElementsByTagName("body")[0]
    let foto = prompt("DONDE QUIERES VIAJAR :]?")
    body.style = "background.image: url('"+foto+"'); background-size: cover;";
}
function Trdueix(){
   let body = document.getElementsByTagName("body")[0]
   body.style = "font-family: 'Balthazar' , Times, serif;"

}

function afegirInfo(){
    let llista = document.getElementById("expL")
    let element = document.createElement("li");
    element.innerHTML = prompt("QUE VOLS AFEGIR?")
    llista.appendChild(element)
}
function transportar(){
   let foto = document.getElementById("foto").style = "display: left"

}
    