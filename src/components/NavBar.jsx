import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex gap-5 text-(--primary)">
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/categorias">Categorias</Link>
      <Link to="/pedidos">Meus Pedidos</Link>
    </nav>
  );
};

export default NavBar;
