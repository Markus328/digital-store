import { Link } from "react-router-dom";
import Layout from "./Layout.jsx";

const NotFound = () => {
  return (
    <Layout>
      <h3>Página não encontrada</h3>
      <Link to="/">Voltar</Link>
    </Layout>
  );
};

export default NotFound;
