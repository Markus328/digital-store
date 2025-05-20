import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.nav``;

const NavBar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/produtos">Produtos</Link>
			<Link to="/categorias">Categorias</Link>
			<Link to="/pedidos">Meus Pedidos</Link>
		</nav>
	);
};

const Layout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default Layout;
