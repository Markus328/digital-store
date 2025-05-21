import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Welcome>
			<h3>Página não encontrada</h3>
			<Link to="/">Voltar</Link>
		</Welcome>
	);
};

export default NotFound;
