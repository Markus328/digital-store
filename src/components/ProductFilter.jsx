import React, { useState, useEffect } from "react";

const ProductFilter = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    marca: ["Adidas", "K-Swiss"],
    categoria: ["Esporte e lazer"],
    genero: ["Masculino", "Feminino"],
    estado: "Novo",
  });

  useEffect(() => {
    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  }, [filters, onFiltersChange]);

  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };

      if (newFilters[section].includes(value)) {
        // Remove if already selected
        newFilters[section] = newFilters[section].filter(
          (item) => item !== value,
        );
      } else {
        // Add if not selected
        newFilters[section] = [...newFilters[section], value];
      }

      return newFilters;
    });
  };

  const handleRadioChange = (section, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [section]: value };

      return newFilters;
    });
  };

  const FilterSection = ({ title, items, type = "checkbox", section }) => (
    <div className="mb-8">
      <h3 className="text-gray-800 font-semibold text-lg mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <label key={item} className="flex items-center cursor-pointer group">
            <div className="relative">
              <input
                type={type}
                name={type === "radio" ? section : undefined}
                checked={
                  type === "checkbox"
                    ? filters[section].includes(item)
                    : filters[section] === item
                }
                onChange={() =>
                  type === "checkbox"
                    ? handleCheckboxChange(section, item)
                    : handleRadioChange(section, item)
                }
                className="sr-only"
              />

              {type === "checkbox" ? (
                <div
                  className={`w-5 h-5 border-2 rounded flex justify-center items-center transition-all duration-200 ${
                    filters[section].includes(item)
                      ? "bg-pink-500 border-pink-500"
                      : "border-gray-300 group-hover:border-pink-300"
                  }`}
                >
                  {filters[section].includes(item) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              ) : (
                <div
                  className={`w-5 h-5 border-2 rounded-full transition-all duration-200 flex justify-center items-center ${
                    filters[section] === item
                      ? "border-pink-500"
                      : "border-gray-300 group-hover:border-pink-300"
                  }`}
                >
                  {filters[section] === item && (
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  )}
                </div>
              )}
            </div>

            <span
              className={`ml-3 text-gray-700 transition-colors duration-200 ${
                (type === "checkbox" && filters[section].includes(item)) ||
                (type === "radio" && filters[section] === item)
                  ? "font-medium"
                  : "group-hover:text-gray-900"
              }`}
            >
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-xs h-full bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Filtrar por</h2>
        <div className="w-full h-px bg-gray-200"></div>
      </div>

      {/* Marca Section */}
      <FilterSection
        title="Marca"
        items={["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"]}
        section="marca"
      />

      {/* Categoria Section */}
      <FilterSection
        title="Categoria"
        items={["Esporte e lazer", "Casual", "Utilitário", "Corrida"]}
        section="categoria"
      />

      {/* Gênero Section */}
      <FilterSection
        title="Gênero"
        items={["Masculino", "Feminino", "Unisex"]}
        section="genero"
      />

      {/* Estado Section */}
      <FilterSection
        title="Estado"
        items={["Novo", "Usado"]}
        type="radio"
        section="estado"
      />

      {/* Clear Filters Button */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            const clearedFilters = {
              marca: [],
              categoria: [],
              genero: [],
              estado: "Novo",
            };
            setFilters(clearedFilters);
          }}
          className="w-full py-2 px-4 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
