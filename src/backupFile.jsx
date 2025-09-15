import { useEffect, useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonCount } from "./components/PokemonCount";
import { PokemonSearch } from "./components/PokemonSearch";
import { PokemonHeader } from "./components/PokemonHeader";

export const AppFront = () => {

    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [count, setCount] = useState(24)
    const [search, setSearch] = useState('')
    // const ApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=24';

    const getPokemeon = async(value) => {
        const ApiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${value}`;
        try{
            const res = await fetch(ApiUrl);
            const data = await res.json();
            const detailedResult = data.results.map( async(curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data
            })
            const detailedResponse = await Promise.all(detailedResult);
            setPokemonData(detailedResponse)
            setLoading(false);
        } catch(error){
            console.log(error);
            setErrorMessage(error);
            setLoading(false);
        }
    }

 useEffect(() => {
        getPokemeon();
    }, [])

    

    const handleCountChange = (value) => {
        setCount(value)
        if(value === ''){
            value = 1;
        }
        getPokemeon(value);   
    }

    const handleSearchChange = (value) => {
        setSearch(value);
    }

   const searchedData = pokemonData.filter((curSearch) =>
  curSearch?.name?.toLowerCase().includes(search.toLowerCase())
);


    if(loading){
        if(errorMessage !== ''){
            return (
                <h1 className="text-5xl font-bold text-center">Error: {errorMessage.message }</h1>
            )
        }else{
            return(
                <h1 className="text-5xl font-bold text-center">Loading</h1>
            )
        }
        
    }
    return(
        <section className="container mx-auto p-10 flex flex-col gap-10">
            <PokemonHeader />
            <div>
                <div className="flex flex-row justify-between">
                    <PokemonSearch searched={search} setSearched={(value) => handleSearchChange (value)}/>
                    <PokemonCount count={count} handleChange={(value) => handleCountChange (value)}/>
                </div>
                <ul className="cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {
                        searchedData.map((curPokemon) => {
                            return (
                                <PokemonList  curPokemon={curPokemon} key={curPokemon.id}/> 
                            )
                        })
                    }
                    
                </ul>
            </div>
        </section>
    )
}

export default AppFront;