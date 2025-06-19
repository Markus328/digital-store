import ProductCard from "../components/ProductCard.jsx";
import Section from "../components/Section.jsx";

const ProductListing = ({ products }) => {
  return (
    // para o tamanho de tela 0 até sm os cards ocupam no mínimo 140px cada, a partir de sm eles ocupam 292px no mínimo
    <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(292px,1fr))] gap-3 bg-(--light-gray-3) p-4 w-full">
      {products ? (
        products.map((product) => (
          <ProductCard
            image={product?.image}
            name={product?.name}
            itemType={product?.itemType}
            price={product?.price}
            priceDiscount={product?.priceDiscount}
            rotation={product?.rotation}
          />
        ))
      ) : (
        <p className="text-base md:text-xl lg:text-2xl">
          Sem produtos encontrados
        </p>
      )}
    </div>
  );
};

export default ProductListing;
