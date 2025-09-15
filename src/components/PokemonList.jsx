export const PokemonList = ({ curPokemon }) => {
    return(
        <li className="pokemon-card relative w-full transition-transform duration-300 hover:scale-101 hover:rounded-none max-w-[36rem]">
            <figure className="flex mb-5">
                <img src={curPokemon.sprites.other.dream_world.front_default} alt={curPokemon.name} className="mx-auto w-[50%]"/>
            </figure>
            <div className="content-wrapper flex flex-col gap-4 py-5 mb-5">
                <div className="text-center">
                    <h1 className="pokemon-name text-3xl font-bold mb-2 capitalize">{curPokemon.name}</h1>
                    <span className="pokemon-abilies text-center">{curPokemon.types.map((curType) => curType.type.name).join(', ')}</span>
                </div>
                <div className="flex flex-row col-grid-3 gap-5 mx-auto text-center">
                    <p className="info"> {curPokemon.height} <br /><span> Height</span></p>
                    <p className="info"> {curPokemon.weight}<br /><span> Weight</span></p>
                    <p className="info"> {curPokemon.stats[5].base_stat} <br /><span> speed</span></p>
                </div>
            <hr className="w-[50%] mx-auto border-t-2 border-[#eaecf4]" />
                <div className="flex flex-row col-grid-3 gap-5 mx-auto text-center">
                    <p className="info"> {curPokemon.base_experience} <br /><span> Experience</span></p>
                    <p className="info"> {curPokemon.stats[1].base_stat} <br /><span> Attack</span></p>
                    <p className="info capitalize"> {curPokemon.abilities[0].ability.name} <br /><span> Abilities</span></p>
                </div>
            </div>
        </li>
    )
}