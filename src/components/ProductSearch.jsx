import ProductFilter from "./ProductFilter.jsx";
import ProductListing from "./ProductListing.jsx";
import { useState, useMemo, useEffect } from "react";

const ProductSearch = ({ query, ...props }) => {
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("relevance");

  const handleSortChange = (e) => setSortBy(e.target.value);

  const [products, setProducts] = useState([]);

  const fetchProducts = useMemo(() => {
    return async () => {
      //TODO: Usar API para fetch

      setProducts(
        Array.from({ length: 18 }, () => ({
          name: "K-Swiss V8 - Masculino",
          itemType: "Tênis",
          price: 200,
          priceDiscount: 100,
          image: "tenis-produto.png",
          rotation: "-20deg",
          scale: "1.25",
        })),
      );
    };
  }, [query, filters, sortBy]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div {...props}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p>
            <b>Resultados para "{query}"</b> - {products.length} produtos
          </p>
          <select
            id="sort-select"
            value={sortBy}
            onChange={handleSortChange}
            className="border border-(--dark-gray-2) rounded px-5 py-3 text-sm"
          >
            {[
              { id: "relevance", label: "Relevância" },
              { id: "price-low", label: "Menor preço" },
              { id: "price-high", label: "Maior preço" },
              { id: "name-asc", label: "Nome A-Z" },
              { id: "name-desc", label: "Nome Z-A" },
              { id: "newest", label: "Mais recentes" },
            ].map((option) => (
              <option
                key={option.id}
                value={option.id}
              >{`Ordernar por: ${option.label}`}</option>
            ))}
          </select>
        </div>
        <div className="flex">
          <ProductFilter onFiltersChange={setFilters} />
          <ProductListing products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
