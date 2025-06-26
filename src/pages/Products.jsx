import Layout from "./Layout.jsx";
import ProductSearch from "../components/ProductSearch.jsx";

const Produtos = () => {
  return (
    <Layout>
      <ProductSearch query="Tênis" className="bg-(--light-gray-3) py-10 px-8" />
    </Layout>
  );
};

export default Produtos;
