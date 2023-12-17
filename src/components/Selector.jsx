import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ApiContext } from "../context/ApiContext";

export default function Selector() {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const stringToLowerCase = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  const { allPokemons } = useContext(ApiContext);

  const [pokemonName, setPokemonName] = useState("");

  const navigate = useNavigate();

  const goToPokemon = () => {
    navigate(`/pokemons/${stringToLowerCase(pokemonName)}`);
  };

  return (
    <div className="selectPokemon">
      <h4>Selecciona un Pokémon:</h4>
      <select
        className="select"
        type="text"
        value={pokemonName}
        onChange={({ target }) => setPokemonName(target.value)}
      >
        <option defaultValue={""} disabled value="">
          Pokémon
        </option>
        {allPokemons.map((e, index) => {
          return <option key={index}>{capitalizeFirstLetter(e.name)}</option>;
        })}
      </select>
      <br />
      <Button variant="outline-danger" onClick={goToPokemon}>
        Buscar
      </Button>
    </div>
  );
}
