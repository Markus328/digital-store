import React, { useState } from "react";
import Sneakers from "../assets/Sneakers-Product.svg";

export default function ProdutoNike() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const tamanhos = [39, 40, 41, 42, 43];

  const coresDisponiveis = [
    { cor: "Lilás", bgColor: "#D6D8FC" },
    { cor: "Rosa Claro", bgColor: "#F2DCDC" },
    { cor: "Roxo Claro", bgColor: "#EEDBFA" },
    { cor: "Bege", bgColor: "#FDEBC8" },
    { cor: "Cinza Claro", bgColor: "#F5F1F4" },
  ];

  const handleAnterior = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? coresDisponiveis.length - 1 : prev - 1
    );
  };

  const handleProximo = () => {
    setCurrentIndex((prev) =>
      prev === coresDisponiveis.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex max-w-7xl mx-auto p-6 gap-10">
      <div className="w-1/2 flex flex-col items-center">
        <div
          className="w-full h-[400px] rounded-xl p-12 flex justify-center items-center relative transition-all duration-300"
          style={{ backgroundColor: coresDisponiveis[currentIndex].bgColor }}
        >
          <img
            src={Sneakers}
            alt="Tênis Nike"
            className="h-[220px] object-contain"
          />

          <button
            onClick={handleAnterior}
            className="absolute left-5 text-3xl text-gray-500 hover:text-black"
          >
            ‹
          </button>
          <button
            onClick={handleProximo}
            className="absolute right-5 text-3xl text-gray-500 hover:text-black"
          >
            ›
          </button>
        </div>

         <div className="flex gap-12 mt-6 justify-center">
          {coresDisponiveis.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-21 h-20 rounded-md cursor-pointer border-2 flex items-center justify-center ${
                idx === currentIndex
                  ? "border-[#8E7FFF]"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: item.bgColor }}
            >
              <img src={Sneakers} alt="Sneaker Mini" className="h-8" />
            </div>
          ))}
        </div>
      </div>

     <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-1">
          Tênis Nike Revolution 6 Next Nature Masculino
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          Casual | Nike | <span className="underline">REF:38467171</span>
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="text-yellow-400 text-sm">★★★★★</div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">4.7</span>{" "}
            <span className="text-gray-400">(90 avaliações)</span>
          </div>
        </div>

        <div className="text-2xl font-bold mb-1">R$ 219,00</div>
        <div className="text-gray-400 line-through mb-4">219,00</div>

        <p className="text-sm text-gray-600 mb-6">
          O Revolution 6 evolui um clássico estabelecido. Cada passada é
          amortecida com uma entressola de espuma e um antepé flexível que
          suaviza os movimentos. Além disso, a parte de cima de tela é ainda
          mais ventilada do que na versão anterior, garantindo corridas mais
          frescas e confortáveis.
        </p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Tamanho</h3>
          <div className="flex gap-2">
            {tamanhos.map((t) => (
              <button
                key={t}
                onClick={() => setTamanhoSelecionado(t)}
                className={`w-10 h-10 text-sm rounded-md border transition-colors duration-200 ${
                  tamanhoSelecionado === t
                    ? "bg-[#F289C2] text-white border-[#F289C2]"
                    : "bg-white text-gray-800 border-gray-300 hover:border-gray-500"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button className="bg-[#FFC629] hover:bg-[#e5b91e] text-white font-bold text-sm px-10 py-3 rounded-md">
          COMPRAR
        </button>
      </div>
    </div>
  );
}
