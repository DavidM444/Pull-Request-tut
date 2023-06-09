function showDescription(id) {
    var descriptions = document.getElementsByClassName("description");
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }

    var selectedDescription = document.getElementById("description" + id);
    selectedDescription.style.display = "block";

}