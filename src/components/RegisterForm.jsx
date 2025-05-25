import React from "react";

export default function Form() {
  return (
    <div className="bg-[#f7f7f7]">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow mb-20 mt-20">
      <h1 className="text-2xl font-bold mb-6">Criar Conta</h1>
      <div></div>
      <form className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold mb-4">Informações Pessoais</h2>
          <div className="space-y-4">
            <label htmlFor="nome">Nome*</label>
            <input type="text" placeholder="Insira seu nome" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required />
            <label htmlFor="cpf">CPF*</label>
            <input type="text" placeholder="Insira seu CPF" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent  focus:ring-0 rounded-lg" required />
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="Insira seu email" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" />
            <label htmlFor="celular">Celular*</label>
            <input type="text" placeholder="Insira seu celular" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required />
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Informações de Entrega</h2>
          <div className="space-y-4">
            <label htmlFor="endereco">Endereço*</label>
            <input type="text" placeholder="Insira seu endereço" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required />
            <label htmlFor="bairro">Bairro*</label>
            <input type="text" placeholder="Insira seu bairro" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required />
            <label htmlFor="cidade">Cidade*</label>
            <input type="text" placeholder="Insira sua cidade" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required />
            <label htmlFor="cep">Cep*</label>
            <input type="text" placeholder="Insira seu CEP" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required />
            <label htmlFor="complemeneto">Complemento</label>
            <input type="text" placeholder="Insira complemento" className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" />
          </div>
        </section>
        <div className="flex items-start">
          <input id="ofertas" type="checkbox" className="mt-1 mr-2" />
          <label htmlFor="ofertas" className="text-sm text-gray-700">
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
          Criar Conta
        </button>
      </form>
    </div>
    </div>
  );
} 
