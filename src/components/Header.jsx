import NavBar from "../components/NavBar.jsx";
import Logo from "../components/Logo.jsx";
import MiniCart from "../assets/mini-cart.svg";

const Header = () => {
  return (
    <>
      <header className="flex flex-col px-16 gap-4">
        <div className="flex justify-between mb-4 items-center">
          <div>
            <Logo color="primary" />
          </div>

          <div class="flex items-center bg-(--light-gray-3) rounded-[8px] px-4 py-3 w-full max-w-md">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              class="  flex-grow bg-transparent focus:outline-none text-(--dark-gray) placeholder-(--light-gray)"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-(--light-gray) cursor-pointer"
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
            <button class=" cursor-pointer text-base font-normal font-['Inter'] text-(--dark-gray-3) underline underline-offset-4 decoration-1 tracking-[1.00px] leading-7 hover:text-(--dark-gray-2) transition-colors duration-200">
              Cadastre-se
            </button>
            <button class=" cursor-pointer w-[114px] h-[40px] bg-(--primary) text-(--white) rounded-lg font-semibold hover:bg-(--light-primary) transition-colors duration-200">
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
