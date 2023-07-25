const tbody = document.querySelector("tbody");
const spanTotal = document.querySelector("span");
const btnComprar = document.querySelector("#btnComprar");

recuperarCarrito();
cargarCarrito();

function cargarCarrito() {
    tbody.innerHTML = "";
    if (carrito.length > 0) {
        carrito.forEach(alimento => tbody.innerHTML += retornoFilaCheckoutHTML(alimento));
        activarClickEnBotonesDelete();
        spanTotal.innerText = calcularTotalCarrito().toLocaleString();
    } else {
        spanTotal.innerText = "0.00";
        tbody.innerHTML = "";
    }
}

function calcularTotalCarrito() {
    return carrito.reduce((acc, alimento) => acc + alimento.precio, 0);
}

function activarClickEnBotonesDelete() {
    const botones = document.querySelectorAll("button.button-outline");
    if (botones) {
        for (let boton of botones) {
            boton.addEventListener("click", (e) => {
                let indice = carrito.findIndex((alim) => alim.id === parseInt(e.target.id));
                if (indice > -1) {
                    carrito.splice(indice, 1);
                    guardarCarrito();
                    cargarCarrito();
                }
            });
        }
    }
}

btnComprar.addEventListener("click", () => {
    Swal.fire({
        title: 'Forma de pago',
        icon: 'question',
        text: 'Seleccione la forma de pago:',
        showCancelButton: true,
        confirmButtonText: 'Efectivo',
        cancelButtonText: 'Tarjeta'
    }).then((result) => {
        if (result.isConfirmed) {
            // Opción de pago en efectivo seleccionada
            const descuento = 0.10; // 10% de descuento
            const precioTotal = parseFloat(spanTotal.innerText.replace(",", ""));
            const precioConDescuento = precioTotal * (1 - descuento);

            Swal.fire({
                title: 'Pago en efectivo',
                icon: 'success',
                text: `Muchas gracias por su compra. Pago realizado en efectivo. Precio con descuento: ${precioConDescuento.toLocaleString()}`,
                confirmButtonText: 'Aceptar'
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Opción de pago con tarjeta seleccionada
            Swal.fire({
                title: 'Pago con tarjeta',
                icon: 'success',
                text: 'Muchas gracias por su compra. Pago realizado con tarjeta.',
                confirmButtonText: 'Aceptar'
            });
        }

        carrito.length = 0;
        localStorage.removeItem("carritoAlimentos");
        cargarCarrito();
    });
});