const ourForm = document.querySelector('form');
const pokemonInput = document.querySelector('#pokemon-field');
const pokemonImage = document.querySelector('.pokeImg');
const pokemonType = document.querySelector('.pokeType');
const pokemonStats = document.querySelector('.stats');
const pokemonSprite = document.querySelector('.sprite');


const getData = async(poke)=> {
    const pokeData = await getPokemon(poke);
    console.log(pokeData);
//parsing the data
    return{
        id: pokeData.name,
        types: pokeData.types,
        stats: pokeData.stats,
        sprite: pokeData.sprites.front_default
    }
}

const updateUI = (result)=>{
    pokemonStats.innerHTML = 
    `<h2>${result.id}</h2>
    ${updateStatsUi(result.stats)}
    `;
    pokemonType.innerHTML = `${updateTypesUi(result.types)}`
    pokemonSprite.setAttribute('src',result.sprite)
}

const updateStatsUi = (stats)=>{
    let htmlString = `<ul>`;
    stats.forEach((stat) =>{
        htmlString +=`<li>${stat.stat.name} ${stat.base_stat}</li>`;
        });
    htmlString+='</ul>';
    console.log(htmlString);
    return htmlString; 
}

const updateTypesUi = (types) =>{
    let htmlString = '<h3>';
    types.forEach((type, index) =>{
        htmlString += `${type.type.name} `;
        if(index!=types.length - 1){
            htmlString+= '/';
        }
    });
    htmlString+='</h3>';
    console.log(htmlString);
    return htmlString;
}

// document.getElementById("pokemon-field").addEventListener('submit', updateUI);

ourForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const poke = pokemonInput.value.trim();
    e.target.reset();
    getData(poke)
        .then((data) => updateUI(data))
        .catch((err) => console.log(err));
})

// getData('350').then(
//     result => {updateUI(result)
//     }).catch(
// err=>console.log(err)
// )
