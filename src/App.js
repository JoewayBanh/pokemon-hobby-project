import React, { useState, Suspense } from "react";
import PokeModal from "./Components/PokeModal";
const PokemonInfo = React.lazy(() => import("./Components/PokemonInfo"));

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3rem", margin: "2rem" }}>
        API call project
      </h1>
      <PokeModal pokemon={pokemon} setPokemon={setPokemon} />
      <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
        <PokemonInfo pokemon={pokemon} setPokemon={setPokemon} />
      </Suspense>
    </>
  );
}

export default App;
