document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.getElementById('pantalla-templates');
    const pantallaPrincipal = document.getElementById('pantallaPrincipal');

    const mostrarTemplate = (idTemplate) => {
        const template = document.getElementById(idTemplate);
        if (template) {
            pantalla.innerHTML = '';
            pantalla.appendChild(template.content.cloneNode(true));
            
            // Ocultar la pantalla principal si no es la que estamos mostrando
            if (idTemplate !== 'pantallaPrincipal' && pantallaPrincipal) {
                pantallaPrincipal.style.display = 'none';
            } else if (pantallaPrincipal) {
                pantallaPrincipal.style.display = 'block';
            }
            
            agregarEventos();
        }
    };

    const agregarEventos = () => {
        // Eventos existentes (los que ya tenías)
        const botonInSesion = document.getElementById('bt-inSesion');
        if (botonInSesion) botonInSesion.addEventListener('click', () => mostrarTemplate('inicioDeSesion'));
        
        document.querySelectorAll('#bt-regresar1').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('pantallaPrincipal'));
        });

        const botonIniciar1 = document.getElementById('bt-iniciar1');
        if (botonIniciar1) botonIniciar1.addEventListener('click', () => mostrarTemplate('pantallaPrincipal'));

        const botonRegistrarse1 = document.getElementById('bt-registrarse1');
        if (botonRegistrarse1) botonRegistrarse1.addEventListener('click', () => mostrarTemplate('registrarse'));
        
        document.querySelectorAll('#bt-regresar2').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('inicioDeSesion'));
        });

        const botonRegistrar2 = document.getElementById('bt-registrarse2');
        if (botonRegistrar2) botonRegistrar2.addEventListener('click', () => mostrarTemplate('verificarCorreo1'));
        
        document.querySelectorAll('#bt-regresar3').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('registrarse'));
        });

        const botonVerificar = document.getElementById('bt-verificar');
        if (botonVerificar) botonVerificar.addEventListener('click', () => mostrarTemplate('verificarCorreo2'));
        
        document.querySelectorAll('#bt-regresar4').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('verificarCorreo1'));
        });

        const botonIniciar2 = document.getElementById('bt-iniciar2');
        if (botonIniciar2) botonIniciar2.addEventListener('click', () => mostrarTemplate('inicioDeSesion'));

        const botonRecuperarC = document.getElementById('bt-recuperarC');
        if (botonRecuperarC) botonRecuperarC.addEventListener('click', () => mostrarTemplate('recuperacionContaseña1'));
        
        document.querySelectorAll('#bt-regresar5').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('inicioDeSesion'));
        });

        const botonRecuperar1 = document.getElementById('bt-recuperar1');
        if (botonRecuperar1) botonRecuperar1.addEventListener('click', () => mostrarTemplate('recuperacionContaseña2'));
        
        document.querySelectorAll('#bt-regresar6').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('recuperacionContaseña1'));
        });

        const botonRecuperar2 = document.getElementById('bt-recuperar2');
        if (botonRecuperar2) botonRecuperar2.addEventListener('click', () => mostrarTemplate('recuperacionContaseña3'));
        
        document.querySelectorAll('#bt-regresar7').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('recuperacionContaseña2'));
        });

        const botonIniciar3 = document.getElementById('bt-iniciar3');
        if (botonIniciar3) botonIniciar3.addEventListener('click', () => mostrarTemplate('inicioDeSesion'));
        
        document.querySelectorAll('#bt-regresar7').forEach(btn => {
            btn.addEventListener('click', () => mostrarTemplate('recuperacionContaseña2'));
        });

        // Nuevos eventos para los botones "Ver Detalle"
        document.querySelectorAll('.btn-ver-detalle').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.getAttribute('data-producto');
                mostrarDescripcionProducto(productId);
            });
        });

        // Evento para el botón de regresar en la descripción del producto
        const btnRegresarDescripcion = document.getElementById('bt-regresar');
        if (btnRegresarDescripcion) {
            btnRegresarDescripcion.addEventListener('click', () => {
                mostrarTemplate('pantallaPrincipal');
            });
        }
    };

    // Función para mostrar la descripción del producto
    const mostrarDescripcionProducto = (productId) => {
        // 1. Obtener el template de descripción
        const template = document.getElementById('descripcionProducto');
        if (!template) return;
        
        // 2. Clonar el template
        const clone = template.content.cloneNode(true);
        
        // 3. Actualizar la información del producto según el ID
        const img = clone.querySelector('.img');
        if (img) img.src = `/client/productos/${productId}.jpg`; 
        
        // 4. Mostrar el template clonado
        pantalla.innerHTML = '';
        pantalla.appendChild(clone);
        
        // 5. Ocultar la pantalla principal
        if (pantallaPrincipal) {
            pantallaPrincipal.style.display = 'none';
        }
        
        // 6. Volver a agregar eventos 
        agregarEventos();
    };

    // Mostrar la pantalla principal al cargar
    mostrarTemplate('pantallaPrincipal');

    // Menú admin (código existente)
    const menuBtn = document.querySelector(".menu-button");
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            document.getElementById("menu")?.classList.toggle("show");
        });

        window.addEventListener("click", function (event) {
            if (!event.target.closest(".menu-container")) {
                document.getElementById("menu")?.classList.remove("show");
            }
        });
    }

    // Botón scroll top (código existente)
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Guardar producto (código existente)
    const form = document.getElementById("productForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Producto guardado exitosamente!");
        });
    }
});
