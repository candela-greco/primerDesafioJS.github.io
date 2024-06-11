let cantidad = 0;
const precioPorCuadro = 8500;

function sumar() {
    cantidad = cantidad + 1;
    document.querySelector('.cantidad').innerHTML = cantidad;
    actualizarCarrito();
}

function restar() {
        cantidad = cantidad - 1;
        document.querySelector('.cantidad').innerHTML = cantidad;
        actualizarCarrito();
}

function compraPrompt() {
    const total = cantidad * precioPorCuadro;
    alert("Has comprado " + cantidad + " cuadros. Total: $" + total);
    actualizarCarrito();
}

function actualizarCarrito() {
    const total = cantidad * precioPorCuadro;
    document.querySelector('.total').innerHTML = total.toFixed(2);
}
