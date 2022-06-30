import NavBar from ".//components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import Contacto from "./views/Contacto";
import Cart from "./views/Cart"
import CheckOut from "./views/CheckOut";
import { CartProvider } from "./Context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <CartProvider >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/products/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
