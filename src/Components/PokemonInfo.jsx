import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import "./PokemonInfo.css";
const PokemonInfo = ({ pokemon, setPokemon }) => {
  const randomNum = Math.floor(Math.random() * 152);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then((res) => setPokemon(res.data));
    }
    fetchData();
  }, []);

  console.log(pokemon);
  const randomizer = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then((res) => setPokemon(res.data));
  };

  return (
    <>
      {pokemon && (
        <div className="pokemon-card">
          <h1 className="pokemon-name">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
          </h1>
          <div className="pokemon-info">
            <h4>Pokedex number: {pokemon.id}</h4>
            <p>Base experience: {pokemon.base_experience}</p>
            <p>Height: {(pokemon.height * 0.1).toFixed(1)} m</p>
            <p>Weight: {(pokemon.weight * 0.1).toFixed(1)} kg</p>
          </div>
          <Images>
            <img src={pokemon.sprites.back_default} alt="back" />
            <img src={pokemon.sprites.front_default} alt="front" />
          </Images>
          <button onClick={randomizer}>Click for random pokemon!</button>
        </div>
      )}
    </>
  );
};

const Images = styled.div`
  display: flex;
`;
export default PokemonInfo;
