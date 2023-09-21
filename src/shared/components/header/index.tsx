import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <>
      <Nav className="d-flex justify-content-center my-4">
        <NavLink className="mx-3" to="/">
          Quem sou
        </NavLink>
        <NavLink className="mx-3" to="/projetos">
          Projetos
        </NavLink>
        <NavLink className="mx-3" to="/clientes">
          Clientes
        </NavLink>
        <NavLink className="mx-3" to="/contatos">
          Contatos
        </NavLink>
      </Nav>
      <div className="text-center mb-4">
        <img src="src/assets/photo.jpeg" width="128" height="128" />
        <h1>Rafael Campos</h1>
        <h2>Desenvolvedor Fullstack</h2>
      </div>
    </>
  );
};

export default Header;
