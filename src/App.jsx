import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Produtos from "./pages/Products.jsx";
import Categorias from "./pages/ProductCategories.jsx";
import Pedidos from "./pages/Orders.jsx";
import NotFound from "./pages/NotFound.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage.jsx";
import ProdutosProduto from "./pages/ProductsProduct.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/loginpages" element={<LoginPage />}></Route>
          <Route path="/produtos/produto" element={<ProdutosProduto />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
