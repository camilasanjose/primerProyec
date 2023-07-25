const guardarCarrito = ()=> {
    if (carrito.length > 0) {
        localStorage.setItem("carritoAlimentos", JSON.stringify(carrito))
    }
}

const recuperarCarrito = ()=> {
    const carritoAlmacenado = JSON.parse(localStorage.getItem("carritoAlimentos"))
    return carritoAlmacenado
}

const carrito = recuperarCarrito() || []