import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Logo from "../components/Logo.jsx";
import IconLoader from "../components/IconLoader.jsx";

import { useLocation } from "react-router-dom";

const Header = ({ onOpenForm }) => {
  const location = useLocation();
  const path = location.pathname;

  if (path === "/loginpages" || path === "/registerpage") return;
  <>
    <header className="flex flex-col px-16 gap-4">
      <div className="flex justify-between mb-4 items-center">
        <div>
          <Logo color="primary" />
        </div>
      </div>
      <NavBar />
    </header>
  </>;
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
            <IconLoader
              name="search"
              className="text-(--light-gray)"
              width="18px"
            />
          </div>

          <div className="flex gap-8 ">
            <Link to="/registerpage">
              <button class=" cursor-pointer text-base font-normal font-['Inter'] text-(--dark-gray-3) underline underline-offset-4 decoration-1 tracking-[1.00px] leading-7 hover:text-(--dark-gray-2) transition-colors duration-200">
                Cadastre-se
              </button>
            </Link>
            <Link to="/loginpages">
              <button class=" cursor-pointer w-[114px] h-[40px] bg-(--primary) text-(--white) rounded-lg font-semibold hover:bg-(--light-primary) transition-colors duration-200">
                Entrar
              </button>
            </Link>
          </div>
          <div>
            <button class="cursor-pointer">
              <IconLoader name="mini-cart" className="text-(--primary)" />
            </button>
          </div>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
