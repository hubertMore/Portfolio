let menuVisible = false;
//función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }    
}

function seleccionar(){
    //oculta el menu una vez que se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTMLCSS");
        habilidades[1].classList.add("JAVASCRIPT");
        habilidades[2].classList.add("PYTHON");
        habilidades[3].classList.add("JAVA");
        habilidades[4].classList.add("C");
        habilidades[5].classList.add("COMUNICACION");
        habilidades[6].classList.add("TRABAJO");
        habilidades[7].classList.add("CREATIVIDAD");
        habilidades[8].classList.add("DEDICACION");
        habilidades[9].classList.add("PROYECT");
    }
}

//se detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}