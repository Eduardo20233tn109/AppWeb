document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("cambiarColorBtn");
    var parrafo = document.getElementById("miParrafo");

    boton.addEventListener("click", function() {
        // Cambiar el color de fondo del párrafo al hacer clic en el botón
        parrafo.style.backgroundColor = "lightblue";
    });
});
