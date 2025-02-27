const View = {
    renderProducts(products) {
        const catalogo = document.querySelector('.catalogo');
        catalogo.innerHTML = '';  // Limpiar el catálogo antes de agregar nuevos productos

        products.forEach(product => {
            const productHTML = `
                <a href="#">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="description">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p class="price">${product.price}</p>
                    </div>
                </a>
            `;
            catalogo.innerHTML += productHTML;
        });
    }
};
