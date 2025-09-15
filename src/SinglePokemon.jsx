import { useEffect, useState } from "react";

export const AppFront = () => {

    const [pokemonData, setpokemonData] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const ApiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";

    // const getPokemeon = () => {
    //     fetch(ApiUrl)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setpokemonData(data);
    //         setLoading(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         setErrorMessage(error);
    //         setLoading(false);
    //     })
    // };

    const getPokemeon = async() => {
        try{
            const res = await fetch(ApiUrl);
            const data = await res.json();
            setpokemonData(data);
            setLoading(false);
        } catch(error){
            console.log(error);
            setErrorMessage(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => {
            getPokemeon();
        }
    },[])
            console.log(pokemonData)
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
            <header className="mb-5">
                <img src="./src/assets/pokemon-logo.webp" alt="pokemon-logo" className="h-20 mx-auto mb-3"/>
                <h1 className="text-5xl font-bold text-center">Lets Catch Pokémon</h1>
                <div className="flex justify-center mt-5">
                    <input placeholder="search Pokemon" type="text" className="bg-white border-0 border-b-2 border-[#acb4d4] focus:outline-none px-2 py-5 w-[300px] text-center"/>
                </div>
            </header>
            <div>
                <ul className="cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    <li className="pokemon-card relative w-full transition-transform duration-300 hover:scale-101 hover:rounded-none max-w-[36rem]">
                        <figure className="flex mb-5">
                            <img src={pokemonData.sprites.other.dream_world.front_default} alt="" className="mx-auto w-[50%]"/>
                        </figure>
                        <div className="content-wrapper flex flex-col gap-4 py-5 mb-5">
                            <div className="text-center">
                                <h1 className="pokemon-name text-3xl font-bold mb-2 capitalize">{pokemonData.name}</h1>
                                <span className="pokemon-abilies text-center">Electric</span>
                            </div>
                            <div className="flex flex-row col-grid-3 gap-5 mx-auto text-center">
                                <p className="info"> {pokemonData.height} <br /><span> Height</span></p>
                                <p className="info"> {pokemonData.weight}<br /><span> Weight</span></p>
                                <p className="info"> {pokemonData.stats[5].base_stat} <br /><span> speed</span></p>
                            </div>
                           <hr className="w-[50%] mx-auto border-t-2 border-[#eaecf4]" />
                            <div className="flex flex-row col-grid-3 gap-5 mx-auto text-center">
                                <p className="info"> 64 <br /><span> Experience</span></p>
                                <p className="info"> {pokemonData.stats[1].base_stat} <br /><span> Attack</span></p>
                                <p className="info capitalize"> {pokemonData.abilities[0].ability.name} <br /><span> Abilities</span></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AppFront;