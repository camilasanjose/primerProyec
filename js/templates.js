const retornoCardHTML = (alimento)=> {
    return `<div class="card">
               <div class="card-image"><img src="${alimento.imagen}" alt="${alimento.nombre}" class="imagen-producto"></div>
                <div class="card-name">${alimento.nombre}</div>
                <div class="card-price">$ ${alimento.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${alimento.id}" title="Click para agregar al carrito">Agregar al carrito</button>
                </div>
            </div>`
}

const retornoCardError = ()=> {
    return `<div class="card-error">
                <h2>Huvo un problema...</h2>
                <h3>No pudimos cargar los alimentos.</h3>
                <h3>Vuelva a intentalo!</h3>
            </div>`
}

const retornoFilaCheckoutHTML = (alimento)=> {
    return `<tr>
                <td><img src="${alimento.imagen}" alt="${alimento.nombre}" class="imagen-producto"></td>
                <td>${alimento.nombre}</td>
                <td>${alimento.precio}</td>
                <td><button id="${alimento.id}" class="button-outline">X</button></td>
            </tr>`
}


