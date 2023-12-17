import pokemon_icon from "../assets/img/pokemon_icon.png"

const Home = () => {
  return (
    <>
      <section className="homeContainer animate__animated animate__fadeIn">
        <h2>Bienvenido maestro Pokémon!</h2>
        <img className="pokemon_logo" src={pokemon_icon} alt="icon" />
      </section>
    </>
  );
};
export default Home;
