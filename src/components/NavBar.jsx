import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  position: relative;
  .active::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: var(--primary);
  }
`;
const Link = ({ to, children }) => {
  return (
    <LinkContainer>
      <NavLink
        to={`${to}`}
        className={({ isActive }) =>
          isActive ? "text-(--primary) active" : "text-(--dark-gray-2)"
        }
      >
        {children}
      </NavLink>
    </LinkContainer>
  );
};
const NavBar = () => {
  return (
    <nav className="flex gap-5 text-base">
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/categorias">Categorias</Link>
      <Link to="/pedidos">Meus Pedidos</Link>
    </nav>
  );
};

export default NavBar;
