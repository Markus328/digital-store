import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import TenisLogin from "../assets/tenis-login.png";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#cfc9f2] to-[#d4d4f7]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-2">Acesse sua conta</h1>
          <p className="text-sm mb-6">
            Novo cliente? Então registre-se <a href="/registerpage" className="text-pink-600 underline">aqui</a>.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Login *</label>
              <input
                type="text"
                placeholder="Insira seu login ou email"
                className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required/>
            </div>
            <div>
              <label className="block mb-1 font-medium">Senha *</label>
              <input
                type="password"
                placeholder="Insira sua senha"
                className="w-full p-3 bg-[#f7f7f7] text-[#474747] border border-transparent focus:ring-0 rounded-lg" required/>
            </div>

            <div className="text-sm text-left">
              <a href="#" className="hover:text-pink-600 underline">Esqueci minha senha</a>
            </div>
              <button type="submit"className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition">Acessar Conta</button>
            <div className="text-center text-sm text-gray-600">Ou faça login com</div>
            <div className="flex justify-center gap-4 text-xl">
              <button type="button"><FcGoogle /></button>
              <button type="button" className="text-blue-600"><FaFacebookF /></button>
            </div>
          </form>
        </div>
          <div className="hidden md:block">
            <img
              src={TenisLogin}
             alt="Tênis"
             className="w-full max-w-lg mx-auto"/>
          </div>
        </div>
     </div>
  );
}
