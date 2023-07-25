const titulo = document.querySelector("h1#titulo")
const slogan = document.querySelector("p#slogan")
const imgCarrito = document.querySelector("img#imgCarrito")
const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const btnCheckout = document.querySelector("div.btn-checkout")
const alimentos = []
const URL = 'js/alimentos.json'


async function obtenerAlimentosAsync() {
        try {
            const response = await fetch(URL)
            const data = await response.json()
                alimentos.push(...data)
                cargarAlimentos(alimentos)
        } catch (error) {
            console.log(error)
            container.innerHTML = retornoCardError()
        }
}


const cargarAlimentos = (array)=> {
    array.forEach(alimento => {
        container.innerHTML += retornoCardHTML(alimento)
    })
    activarClickEnBotones()
}

const activarClickEnBotones = ()=> {
    const btnComprar = document.querySelectorAll("button.button.button-outline.button-add")
          for (boton of btnComprar) {
            boton.addEventListener("click", (e)=> {
                let resultado = alimentos.find(alimento => alimento.id === parseInt(e.target.id))
                    carrito.push(resultado)
                    guardarCarrito()
                    notificar()
            })
          }
}

function notificar() {
    Toastify({
        text: "El alimento ha sido agregado al carrito.",
        className: "info",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        style: {
          background: "black"
        }
      }).showToast();
    }

  

obtenerAlimentosAsync()
recuperarCarrito()

btnCheckout.addEventListener("click", ()=> location.href = "checkout.html")






