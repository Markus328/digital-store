import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Produtos from "./pages/Produtos.jsx";
import Categorias from "./pages/Categorias.jsx";
import Pedidos from "./pages/Pedidos.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home message="Olá, mundo!" />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="categorias" element={<Categorias />} />
            <Route path="pedidos" element={<Pedidos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
