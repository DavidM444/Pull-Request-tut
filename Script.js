function showDescription(id) {
    // Ocultar todas las descripciones
    var descriptions = document.getElementsByClassName("description");
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    
    // Mostrar la descripción seleccionada
    var selectedDescription = document.getElementById("description" + id);
    selectedDescription.style.display = "block";
    
    // Desplazar el foco a la descripción seleccionada
    selectedDescription.scrollIntoView({ behavior: 'smooth' });
}