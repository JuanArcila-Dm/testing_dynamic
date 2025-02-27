document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector("#pantalla-templates");
    const history = []; // Array para almacenar el historial de templates

    const mostrarTemplate = (templateId) => {
        contenedor.innerHTML = ""; // Limpia el contenido del contenedor

        const template = document.querySelector(`#${templateId}`);
        if (template) {
            const contenidoClonado = template.content.cloneNode(true);
            contenedor.appendChild(contenidoClonado);
            history.push(templateId); // Agrega el template al historial
            controlarVisibilidadCarrito(templateId); // Controla la visibilidad del botón
        } else {
            console.error(`Template con ID "${templateId}" no encontrado.`);
        }
    };

    const controlarVisibilidadCarrito = (templateId) => {
        const carrito = document.getElementById("carrito");
        if (templateId === "pantallaPrincipal" || templateId === "descripcionProducto") {
            carrito.style.display = "block"; // Muestra el botón
        } else {
            carrito.style.display = "none"; // Oculta el botón
        }
    };

    // Cargar el template inicial
    mostrarTemplate("pantallaPrincipal");

    document.addEventListener("click", (event) => {
        // INICIO DE SESION
        if (event.target.id === "bt-inSesion") {
            mostrarTemplate("inicioDeSesion");
        } else if (event.target.id === "bt-registrarse1") {
            mostrarTemplate("registrarse");
        } else if (event.target.id === "bt-recuperarC") {
            mostrarTemplate("recuperacionContaseña1");
        }
        // REGISTRARSE
        else if (event.target.id === "bt-registrarse2") {
            mostrarTemplate("verificarCorreo1");
        } else if (event.target.id === "bt-verificar") {
            mostrarTemplate("verificarCorreo2");
        } else if (event.target.id === "bt-iniciar2") {
            mostrarTemplate("inicioDeSesion");
        }
        // RECUPERACION DE CONTRASEÑA
        else if (event.target.id === "bt-recuperar1") {
            mostrarTemplate("recuperacionContaseña2");
        } else if (event.target.id === "bt-recuperar2") {
            mostrarTemplate("recuperacionContaseña3");
        } else if (event.target.id === "bt-iniciar3") {
            mostrarTemplate("inicioDeSesion");
        }
        // CARRITO DE COMPRAS
        else if (event.target.id === "bt-carrito") {
            mostrarTemplate("carritoCompras")
        }
        // BOTON REGRESAR
        else if (event.target.closest(".btn-regresar")) {
            history.pop(); // Elimina el último template del historial
            const previousTemplate = history[history.length - 1];
            if (previousTemplate) {
                mostrarTemplate(previousTemplate);
            } else {
                contenedor.innerHTML = ""; // Limpia el contenedor si no hay historial
            }
        }
    });
});
