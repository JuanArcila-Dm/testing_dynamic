export default class Router {
    constructor(routes) {
      this.routes = routes;
      this.currentRoute = null;
      this.onRouteChange = null;
    }
  
    navigate(path) {
      this.currentRoute = this.routes[path];
      if (this.onRouteChange) {
        this.onRouteChange(this.currentRoute);
      }
    }
  
    setOnRouteChange(callback) {
      this.onRouteChange = callback;
    }
  
    render() {
      if (this.currentRoute) {
        return this.currentRoute.render();
      }
      return '';
    }
  }