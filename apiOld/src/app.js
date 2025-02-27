import Router from './router.js';
import ProductCatalog from './pages/ProductCatalog.js';

const router = new Router({
  '/': ProductCatalog,
  '/papeles': PapelesPage,
  '/utiles-escolares': UtilesEscolaresPage,
  '/libros-academicos': LibrosAcademicosPage,
  '/jugueteria': JugueteriaPage,
  '/libros-apuntes': LibrosApuntesPage
});

router.setOnRouteChange((route) => {
  document.getElementById('main-content').innerHTML = route.render();
});

// Renderizar la página inicial (Productos de Oficina)
router.navigate('/');