import CardProduct from "../components/CardProduct.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Section from "../components/Section.jsx";
import Layout from "./Layout.jsx";
const ProductsProduct = () => {
  const products = Array.from({ length: 8 }, () => ({
    name: "K-Swiss V8 - Masculino",
    itemType: "Tênis",
    price: 200,
    priceDiscount: 100,
    image: "tenis-produto.png",
    rotation: "-20deg",
    scale: "1.25",
    link: "/produtos/produto",
  }));
  return (
    <Layout className="flex flex-col items-center gap-40 px-10">
      <section id="product">
        <CardProduct />
      </section>

      <Section
        id="related-products"
        title="Produtos Relacionados"
        link={{ text: "Ver todos →", href: "/produtos" }}
      >
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
};

export default ProductsProduct;
