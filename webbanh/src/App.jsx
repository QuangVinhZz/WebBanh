import { Route, Routes } from "react-router-dom"; // Xóa Router ở đây
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenuPricing from "./pages/MenuPricing";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPricing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
