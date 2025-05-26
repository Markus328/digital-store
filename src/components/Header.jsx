import NavBar from "../components/NavBar.jsx";
import Logo from "../assets/logo.png"
import MiniCart from "../assets/mini-cart.svg"
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom"

function Header () {
const location = useLocation();
const path = location.pathname;

if (path === "/loginpages" || path === "/registerpage") {
  return (
      <header className="pb-4 ml-26">
        <img src={Logo} alt="logo" />
      </header>
  );
}
  return (
    <>
      <header>
        <div className="flex justify-evenly mb-4 items-center">
          <div>
            <img src={Logo} alt="logo" />
          </div>
        <div class="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md shadow-sm">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              class="  flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor ">
              <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
        </div>
            <div className="flex gap-8 ">
              <Link to="/registerpage">
                <button class="to=/registerpage cursor-pointer text-[16px] font-normal font-['Inter'] text-gray-700 underline underline-offset-4 decoration-1 tracking-[1.00px] text-base leading-7 hover:text-gray-900 transition-colors duration-200">Cadastre-se</button>
              </Link>
              <Link to="/loginpages">
                <button class=" cursor-pointer w-[114px] h-[40px] bg-[#C92071] text-white rounded-lg font-semibold hover:bg-[#e03b8e] transition-colors duration-200">Entrar</button>
              </Link>
            </div>
            <div>
              <button class="cursor-pointer">
                <img src={MiniCart} alt="carrinho" />
              </button>
            </div>
          </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
