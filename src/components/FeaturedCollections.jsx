import React from 'react';
import Camisa from '../assets/shirt-collection.png';
import Tenis from '../assets/shoe-collection.png'
import Fone from '../assets/headset-collection.png'



export default function FeaturedCollections() {

    const collections = [
  {
    title: 'Novo drop Supreme',
    image: Camisa,
    discount: '30% OFF',
    rotation: '-20deg',
    scaleX: '2',
    scaleY: '2',
    translateY: '30%',
    button: 'Comprar',
  },
  {
    title: 'Coleção Adidas',
    image: Tenis,
    discount: '30% OFF',
    rotation: '0',
    scaleX: '-1.5',
    scaleY: '1.5',
    translateY: '10%',
    button: 'Comprar',
  },
  {
    title: 'Novo Beats Bass',
    image: Fone,
    discount: '30% OFF',
    rotation: '30deg',
    scaleX: '-1.5',
    scaleY: '1.5',
    translateY: '11%',
    button: 'Comprar',
  },

];
  return (
    <div className="py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {collections.map((item, idx) => (
          <div
            key={idx}
            className={`border ${
              idx === 0 ? 'border-blue-500' : 'border-transparent'
            } rounded-md bg-[#D8E3F2] flex overflow-hidden`} >

            <div className="flex flex-col justify-center p-4">

            <span className=" bg-[#E7FF86] text-sm font-bold py-1 rounded-full w-[80px] text-center">
              {item.discount}
            </span>
            <div className="mt-2 font-semibold text-[32px]">{item.title}</div>
            <button className="bg-white text-pink-600 text-sm font-semibold px-4 py-1 rounded shadow w-[153px] h-[36px]">
              {item.button}
            </button>
            </div>


            <div className='ml-10'>
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-40 object-contain my-4`}
              style={{
                transform: `rotate(${item.rotation}) scaleX(${item.scaleX}) scaleY(${item.scaleY}) translateY(${item.translateY})`
              }}
            />
            </div>
            
            </div>
        ))}
      </div>
    </div>
  );
}
