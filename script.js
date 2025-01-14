//Obtener todos los personajes para montrarlos. 
//Llamar a la api según el filtro 
//Que cambie el personaje cuando se vuelva a llamar con otro filtrado

const charactersEl = document.getElementById('characters');
const nameFilterEl = document.getElementById('name-filter');
const statusFilterEl = document.getElementById('status-filters');

//Función para llamar a la api

async function getCharacters (name, status){
    let url = 'https://rickandmortyapi.com/api/character';

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);

    return data.results;
}

async function displayCharacters(name, status) {
    const characters = await getCharacters(name, status);
}