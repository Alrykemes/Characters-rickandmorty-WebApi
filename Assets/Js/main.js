const characterListEl = document.getElementById("charactersEl")
const loadMoreButtonEl = document.getElementById("loadMoreButton")
let page = 1;

function loadMoreCharacters(page) {
    rickandmortyapi.getCharacters(page).then((characters = []) => {
        const newHtml = characters.map(character => `
        <li class="character">
            <span class="number">#${character.id}</span>
            <span class="name">${character.name}</span>
            <div class="detail">
                <img src="${character.image}" alt="${character.name}">
                    <ol>
                        <li class="name">Status:</li>
                        <li class="funcao">${character.status}</li>
                        <li class="name">Espécie:</li>
                        <li class="origem">${character.species}</li>
                        <li class="name">Localização:</li>
                        <li class="localizacao">${character.origin.name}</li>
                    </ol>
            </div>
        </li>
        ` ).join("")
        characterListEl.innerHTML += newHtml
    })
}

loadMoreCharacters(page)

loadMoreButtonEl.addEventListener('click', () => {
    page++
    loadMoreCharacters(page)
    if(page > 42) {
        alert("Quantidade máxima de páginas!")
    }
})


