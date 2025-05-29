import { Link } from "react-router-dom";
import LogoFooter from "../assets/logo-footer.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Cor = styled.footer`
li{
		position: relative;
}
 li:hover{
	cursor: pointer;
    color: #C92071;
    transition: 250ms ease-in;
}
& li::before{
	content: '';
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 0px;
	height: 1px;
	background-color: rgb(56, 52, 44);
	transition: 1s ease;
}
& li:hover:before{
    width: 40%;
    background-color: #C92071;
}
`
const Footer = () => {
  return (
	  <footer className="bg-[#1F1F1F] text-white px-10 py-12">
		<Cor>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold">
		<Link target="_self" href="#">
			<img src={LogoFooter} alt="Logo Digital Store" />
		</Link>
          </div>
          <p className="mt-4 text-sm text-gray-300 tex-justify indent-8">
            Na Digital Store, estilo e conforto andam juntos. Oferecemos moda unissex com sapatos, roupas e bonés que valorizam sua identidade. Peças versáteis e autênticas para acompanhar você em cada momento.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-[#C92071] cursor-pointer" />
            <FaInstagram className="hover:text-[#C92071] cursor-pointer" />
            <FaTwitter className="hover:text-[#C92071] cursor-pointer" />
          </div>
        </div>
        <div className="ml-20" >
          <h3 className="font-semibold mb-4">Informação</h3>
          <ul className="space-y-2 text-sm text-gray-300 ">
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
            <li>Sobre Drip Store</li>
          </ul>
        </div>
        <div className="ml-14">
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Av. Santos Dumont, 1510 - 1º andar<br />
            Aldeota, Fortaleza - CE, 60150-161<br /><br />
            (85) 3051-3411
          </p>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-12 pt-4 text-center text-sm text-gray-400">
        © 2025 Digital College
      </div>
	</Cor>
    </footer>
  );
}

export default Footer;
