import NavBar from "../components/NavBar.jsx";
import Logo from "../assets/logo.png";
import MiniCart from "../assets/mini-cart.svg";

const Header = () => {
  return (
    <>
      <header className="flex flex-col px-16 gap-4">
        <div className="flex justify-between mb-4 items-center">
          <div>
            {/* FIXME: usar svg ao invés de png */}
            <img src={Logo} alt="logo" />
          </div>

          <div class="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md shadow-sm">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              class="  flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>

          <div className="flex gap-8 ">
            {/* link para a página de cadastre-se */}
            {/* link para a página de logar*/}
            <button class=" cursor-pointer text-[16px] font-normal font-['Inter'] text-gray-700 underline underline-offset-4 decoration-1 tracking-[1.00px] text-base leading-7 hover:text-gray-900 transition-colors duration-200">
              Cadastre-se
            </button>
            <button class=" cursor-pointer w-[114px] h-[40px] bg-(--primary) text-white rounded-lg font-semibold hover:bg-(--light-primary) transition-colors duration-200">
              Entrar
            </button>
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
