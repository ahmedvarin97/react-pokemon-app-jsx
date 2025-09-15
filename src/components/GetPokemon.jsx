export const GetPokemeon = async(value) => {
        const ApiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${value}`;
        try{
            const res = await fetch(ApiUrl);
            const data = await res.json();
            console.log(data);

            const detailedResult = data.results.map( async(curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data
            })
            const detailedResponse = await Promise.all(detailedResult);
            setpokemonData(detailedResponse)
            
            
            setLoading(false);
        } catch(error){
            console.log(error);
            setErrorMessage(error);
            setLoading(false);
        }
}