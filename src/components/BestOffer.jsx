import React, { useState, useEffect } from "react";
import DynamicImage from "./DynamicImage.jsx";

const BestOffer = ({
  slides = [
    {
      image: "snakers-branco.png",
      title: "Queima de estoque Nike 🔥",
      rotation: "-20deg",
      scale: "1.5",
      subtitle: "Melhores ofertas personalizadas",
      description:
        "Consequat culpa exercitation elit nisl excepteur dolore tempor laboris eiusmod irure consectetur.",
      buttonText: "Ver Ofertas",
    },
    {
      image: "tenis-produto.png",
      title: "Nova Coleção 2025 ⚡",
      subtitle: "Lançamentos exclusivos",
      description:
        "Descubra os últimos modelos com tecnologia avançada e design inovador para seu estilo.",
      buttonText: "Explorar",
    },
    {
      image: "tenis-lowa.png",
      title: "Ofertas Especiais 🎯",
      subtitle: "Descontos imperdíveis",
      description:
        "Até 50% de desconto em produtos selecionados. Aproveite enquanto durarem os estoques.",
      buttonText: "Comprar Agora",
    },
  ],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div
      className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden "
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-24 h-24 opacity-20">
        <DynamicImage asset="dotted-circle.svg" width="140px" />
      </div>

      <div className="flex items-center p-8">
        {/* Left side - Content */}
        <div className="pr-8 w-1/2 space-y-6">
          {/* Subtitle */}
          <div className="text-(--warning) text-sm font-medium tracking-wide uppercase">
            {currentSlideData.subtitle}
          </div>

          {/* Main Title */}
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              {currentSlideData.title}
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            {currentSlideData.description}
          </p>

          {/* CTA Button */}
          <button
            className={`bg-(--primary) hover:bg-(--light-primary) text-white px-8 py-4 rounded-md font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            {currentSlideData.buttonText}
          </button>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2 translate-x-[10%] relative">
          <div className="relative">
            {/* Background decorative circle */}
            <div className="absolute   "></div>

            {/* Product image */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <DynamicImage
                asset={currentSlideData.image}
                name={currentSlideData.title}
                rotation={currentSlideData.rotation}
                scale={currentSlideData.scale}
                className="w-full h-auto max-w-xl mx-auto transform transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {/* <button */}
      {/*   onClick={goToPrevious} */}
      {/*   className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110" */}
      {/* > */}
      {/* </button> */}
      {/**/}
      {/* <button */}
      {/*   onClick={goToNext} */}
      {/*   className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110" */}
      {/* > */}
      {/*   <ChevronRight className="w-6 h-6 text-gray-700" /> */}
      {/* </button> */}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-pink-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"> */}
      {/*   <div */}
      {/*     className="h-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300" */}
      {/*     style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} */}
      {/*   /> */}
      {/* </div> */}
    </div>
  );
};

export default BestOffer;
