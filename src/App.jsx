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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
