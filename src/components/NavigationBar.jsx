import { NavLink } from "react-router-dom";
import pikachu_img from "../assets/img/pikachu_img.png";

const Header = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <>
      <header className="animate__animated animate__fadeInDown bg-danger">
        <nav className="navigationBar">
          <div className="nameSection">
            <h3 className="webName">Pokédex</h3>
            <div className="icon">
              <img className="pikachu_img" src={pikachu_img} alt="" />
            </div>
          </div>
          <div className="linkSection">
            <NavLink className={setActiveClass} to="/">
              HOME
            </NavLink>
            {"-"}
            <NavLink className={setActiveClass} to="/pokemons">
              POKÉMONS
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
