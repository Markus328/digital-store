import Layout from "../pages/Layout.jsx";
import Section from "../components/Section.jsx";
import ProductListing from "../components/ProductListing.jsx";

const ProductsHomeList = () => {
  const products = Array.from({ length: 8 }, (_, index) => ({
    name: "K-Swiss V8 - Masculino",
    itemType: "Tênis",
    price: 200,
    priceDiscount: 100,
    image: "tenis-produto.png",
    rotation: "-30deg",
  }));
  return <ProductListing id="products-list-home" products={products} />;
};

const Home = () => {
  return (
    <Layout className="px-10 bg-(--light-gray-3)">
      {/* component simples de seção */}
      <section id="best-offers">
        {/* TODO: Adicionar componente de melhores ofertas */}
      </section>

      <Section id="collections-1" title="Coleções em destaque">
        {/* TODO: Adicionar componente de coleção 1 */}
      </Section>
      <Section id="collections-2" title="Coleções em destaque">
        {/* TODO: Adicionar componente de coleção 2 */}
      </Section>

      <Section
        id="collections-products"
        title="Coleções em destaque"
        link={{ text: "Ver todos →", href: "/produtos" }}
      >
        <ProductsHomeList />
      </Section>
    </Layout>
  );
};

export default Home;
