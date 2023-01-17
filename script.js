let menuVisible = false;

//funcion q oculta o muestra el menu

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu una vez q se seleeciona una opcion
    document.getElementById ("nav").classList="";
    menuVisible = false;
}

//funcion que aplica a las animaciones de las habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("express");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoenequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("management");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 