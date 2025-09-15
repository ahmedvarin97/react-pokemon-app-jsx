export const PokemonCount = ({count, handleChange }) => {
    return (
        <div className="flex flex-row justify-left items-center mt-5 mb-5 gap-3">
            <label htmlFor="countPokemon">Count Of Pokemon</label>
            <input placeholder="Pokemon Count" type="number" min="1" max="1000" name="countPokemon" value={count} onChange={(event) => handleChange(event.target.value)} className="bg-white border-0 border-b-2 border-[#acb4d4] focus:outline-none px-5 py-5 w-[100px] text-left"/>
        </div>
    )
}