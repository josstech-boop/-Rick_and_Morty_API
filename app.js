let row = document.querySelector('.row')
let genero = document.querySelector('#genero')
let especies = document.querySelector('#especies')
let busqueda = document.querySelector('#busqueda')
let personajesGlobal = []

function pintarColumnas(personajes) {
    let html = ''
    personajes.forEach(item => {
        html += ` 
                <div class="col mt-1">
                    <div class="card" style="width: 18rem;">
                        <img src="${item.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.species} </p>
                            <p class="card-text">${item.gender}</p>
                        </div>
                    </div>
                </div>
            `
    })
    return html
}

function obtenerPersonajes() {
    let html = ''
    let baseUrl = 'https://rickandmortyapi.com/api'
    let response = fetch(`${baseUrl}/character`)
    response.then((plana) => plana.json())
        .then((personajes) => {
            personajesGlobal = personajes.results
            html = pintarColumnas(personajesGlobal)
            row.innerHTML = html
        })
        .catch((error) => {
            row.innerHTML = `<h2 class="text-center"> Ha fallado la solicitud API </h2>`
        })
}

let name = null
let specie = 'todos'
let gender = 'todos'

genero.addEventListener('change', (event) => {
    gender = event.target.value
    filtrar(name, specie, gender)
})

especies.addEventListener('change', (event) => {
    specie = event.target.value
    filtrar(name, specie, gender)
})

busqueda.addEventListener('keyup', (event) => {
    name = event.target.value
    filtrar(name, specie, gender)

})

const filtrar = (name, specie, gender) => {

    let temporal = []
    let html = ''

    temporal = personajesGlobal.filter(item => (name != '' && name != null) ? item.name.toLowerCase().includes(name.toLowerCase()) : item).filter(item => specie != 'todos' ? item.species == specie : item).filter(item => gender != 'todos' ? item.gender == gender : item)

    html = pintarColumnas(temporal)
    row.innerHTML = html

}

obtenerPersonajes()


