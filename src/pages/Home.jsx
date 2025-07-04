import Layout from "../pages/Layout.jsx";
import Section from "../components/Section.jsx";
import ProductListing from "../components/ProductListing.jsx";
import BestOffer from "../components/BestOffer.jsx";
import SpecialOffer from "../components/SpecialOffer.jsx";
import FeaturedCollections from "../components/FeaturedCollections.jsx";
import CollectionsIcons from "../components/CollectionsIcons.jsx";

const ProductsHomeList = () => {
  const products = Array.from({ length: 8 }, () => ({
    name: "K-Swiss V8 - Masculino",
    itemType: "Tênis",
    price: 200,
    priceDiscount: 100,
    image: "tenis-produto.png",
    rotation: "-30deg",
    scale: "1.25",
  }));
  return <ProductListing id="products-list-home" products={products} />;
};

const Home = () => {
  return (
    <Layout className="px-10">
      {/* component simples de seção */}
      <section id="best-offers">
        <BestOffer />
      </section>

      <Section id="collections-1" title="Coleções em destaque">
        <FeaturedCollections />
      </Section>
      <Section id="collections-2" title="Coleções em destaque">
        <CollectionsIcons />
      </Section>

      <Section
        id="collections-products"
        title="Coleções em destaque"
        link={{ text: "Ver todos →", href: "/produtos" }}
      >
        <ProductsHomeList />
      </Section>
      <section id="SpecialOffer">
        <SpecialOffer />
      </section>
    </Layout>
  );
};

export default Home;
