document.addEventListener('DOMContentLoaded', function() {
    const btnCart = document.querySelector('.container-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');
    const cartCounter = document.getElementById('contador-productos');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productInfo = this.closest('.item');
            const price = productInfo.querySelector('.price').textContent;
            const title = productInfo.querySelector('h2').textContent;

            incrementCartCounter();
            addProductToCart(title, price);
            showCart();
        });
    });

    function incrementCartCounter() {
        let currentCount = parseInt(cartCounter.textContent);
        cartCounter.textContent = currentCount + 1;
    }

    function addProductToCart(title, price) {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-product');
        productElement.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">1</span>
                <p class="titulo-producto-carrito">${title}</p>
                <span class="precio-producto-carrito">${price}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        `;
        containerCartProducts.appendChild(productElement);
    }

    function showCart() {
        containerCartProducts.classList.remove('hidden-cart');
    }
});
