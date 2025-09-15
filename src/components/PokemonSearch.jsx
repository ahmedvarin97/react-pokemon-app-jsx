export const PokemonSearch = ({searched, setSearched}) => {
    return(
        <div className="flex flex-row justify-center items-center mt-5 mb-5 gap-3">
            <label htmlFor="pokemonSearch">Pokemon Search</label>
            <input placeholder="Search Pokemon" type="text" value={searched} onChange={(event) => setSearched(event.target)} name="pokemonSearch" className="bg-white border-0 border-b-2 border-[#acb4d4] focus:outline-none px-5 py-5 w-[250px] text-left"/>
        </div>
    )
}