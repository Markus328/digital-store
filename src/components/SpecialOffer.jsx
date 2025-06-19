import React from 'react';
import Shoes from '../assets/shoes-special-offer.png';

const SpecialOffer = () => {
    return (
        <main  className="flex justify-center max-h-[450px] items-center bg-white px-6 -mx-10">
        <section className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 flex justify-center p-6">  
            <div className="relative flex items-center h-[400px] justify-center">
                <div
                className="absolute w-[390px] h-[390px] rounded-full bg-gradient-to-b from-[#ebeaee] to-[#FFFFFF00]"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                ></div>
                <img
                src={Shoes}
                alt="tênis"
                className="relative w-[533px] h-[300px]"
                />
            </div>
            </div>

            <div className="w-[20%] md:w-1/2 p-20 md:p-10 m-[20px]">
                <h6 className="text-pink-600 text-sm font-semibold mb-2">Oferta especial</h6>
                <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-5">Air Jordan edicão de colecionador
                </h1>

                <p >
                O tênis que marcou gerações agora pode ser seu.
                A Edição de Colecionador do Air Jordan chegou com design premium, detalhes únicos e produção extremamente limitada para quem valoriza estilo, autenticidade e história nos pés.
                Não perca essa chance de renovar o visual com aquele tênis que você sempre quis!</p>
        
             <button class=" cursor-pointer  mt-10 w-[170px] h-[40px] bg-(--primary) text-(--white) rounded-lg font-semibold hover:bg-(--light-primary) transition-colors duration-200">
                Ver Oferta
              </button>
              </div>
        </section>
        </main>
    );
};

export default SpecialOffer;    