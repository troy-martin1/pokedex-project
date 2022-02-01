const getPokemon = async (id)=>{
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await result.json();
    return data;
}

// getPokemon('555')


// getPokemon('onix')
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });
