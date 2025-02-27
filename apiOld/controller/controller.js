let vista = new vista ();
const mainContenido = document .getElementById ("mainContenido");

window.onload = () => {
    document
    .getElementById ("abrir")
    .addEventlisterner ("click", mostrarMenu) 

    document
    .getElementById ("b-about")
    .addEventListener("click", mostarAbout)
};