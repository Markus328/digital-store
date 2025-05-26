import { Link } from "react-router-dom";
import LogoFooter from "../assets/logo-footer.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Cor = styled.footer`
  li {
    position: relative;
  }
  li:hover {
    cursor: pointer;
    color: var(--primary);
    transition: 250ms ease-in;
  }
  & li::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 1px;
    background-color: var(--dark-gray);
    transition: 1s ease;
  }
  & li:hover:before {
    width: 40%;
    background-color: var(--primary);
  }
`;

const Footer = () => {
  return (
    <footer className="bg-(--dark-gray) text-(--white) px-10 py-12">
      <Cor>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <Link target="_self" href="#">
                <img src={LogoFooter} alt="Logo Digital Store" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-justify indent-8">
              Na Digital Store, estilo e conforto andam juntos. Oferecemos moda
              unissex com sapatos, roupas e bonés que valorizam sua identidade.
              Peças versáteis e autênticas para acompanhar você em cada momento.
            </p>
            <div className="flex gap-4 mt-4 text-lg">
              <FaFacebookF className="hover:text-(--primary) cursor-pointer" />
              <FaInstagram className="hover:text-(--primary) cursor-pointer" />
              <FaTwitter className="hover:text-(--primary) cursor-pointer" />
            </div>
          </div>
          {/* FIXME: adicionar o componente de informações e usar para formar as colunas */}
          <div className="ml-20">
            <h3 className="font-bold mb-4">Informação</h3>
            <ul className="space-y-2 text-sm ">
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
              <li>Sobre Drip Store</li>
            </ul>
          </div>
          <div className="ml-14">
            <h3 className="font-bold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm ">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <p className="text-sm leading-relaxed">
              Av. Santos Dumont, 1510 - 1º andar
              <br />
              Aldeota, Fortaleza - CE, 60150-161
              <br />
              <br />
              (85) 3051-3411
            </p>
          </div>
        </div>
        <hr className="text-(--dark-gray-3) mt-12 mb-5" />
        <p className="text-sm text-center">© 2025 Digital College</p>
      </Cor>
    </footer>
  );
};

export default Footer;
