
const rickandmortyapi = {}


rickandmortyapi.getCharacters = (page) => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
}
