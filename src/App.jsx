export const App = () => {
  return(
    <div>
      {/* <div className="top-bar py-5 px-5 mb-10">
        <img src="./src/assets/pokemon-logo.webp" alt="pokemon-logo" className="top-logo mx-auto"/>
      </div> */}
      <section className="container mx-auto">
        <header>
          <h1 className="heading text-center text-5xl mb-10">Pokemon Listing</h1>
        </header>
        <div>
          <ul className="cards">
            <li className="pokemon-card">
                <figure>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur" className="pokemon-image" />
                  </figure>
                <h1 className="pokemon-name">bulbasaur</h1>
                <div className="pokemon-info pokemon-highlight">
                    <p>grass, poison</p>
                </div>
                <div className="grid-three-cols">
                    <p className="pokemon-info"> 7 </p>
                    <p className="pokemon-info"><span> Weight:</span> 69</p>
                    <p className="pokemon-info"><span> speed:</span> 45</p>
                </div>
                <div className="grid-three-cols">
                    <div className="pokemon-info">
                        <p>64</p><span> Experience:</span></div>
                    <div className="pokemon-info">
                        <p>49</p><span>Attack:</span></div>
                    <div className="pokemon-info">
                        <p>overgrow</p><span> Abilities: </span></div>
                </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App;