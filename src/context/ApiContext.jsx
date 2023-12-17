import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState();
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  const limit = 150;

  const getAllPokemons = async () => {
    try {
      const response = await axios.get(`${apiUrl}`, {
        params: {
          limit: limit,
        },
      });
      const pokemons = response.data.results;
      setAllPokemons(pokemons);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        allPokemons,
        setAllPokemons,
        apiUrl,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
