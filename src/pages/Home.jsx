import Welcome from "../components/Welcome.jsx";
const Home = ({ message }) => {
	return (
		<Welcome>
			<h1>Home</h1>
			<p>{message}</p>
		</Welcome>
	);
};

export default Home;
