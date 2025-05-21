import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.nav``;

const NavBar = () => {
	return (
		<nav class="flex gap-5 text-(--primary)">
			<Link to="/">Home</Link>
			<Link to="/produtos">Produtos</Link>
			<Link to="/categorias">Categorias</Link>
			<Link to="/pedidos">Meus Pedidos</Link>
		</nav>
	);
};

const Layout = () => {
	return (
		<div class="w-full h-full">
			<NavBar />
			<div class="justify-self-center self-center w-full h-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
