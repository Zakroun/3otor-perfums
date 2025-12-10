import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgetPassword from "./auth/Forgetpassword";
import CodeVerfication from "./auth/Codeverfication";
import ResetPassword from "./auth/ResetPassword";
import Favorites from "./components/Favorites";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header/><HomePage /><Footer/></>}/>
        <Route path="/about" element={<><Header/><About /><Footer/></>}/>
        <Route path="/contact" element={<><Header/><Contact /><Footer/></>}/>
        <Route path="/shop" element={<><Header/><ProductsList /><Footer/></>}/>
        <Route path="/shop/:category" element={<><Header/><ProductsList /><Footer/></>}/>
        <Route path="/product/:id" element={<><Header/><Product /><Footer/></>}/>
        <Route path="/cart" element={<><Header/><Cart /><Footer/></>}/>
        <Route path="/favorites" element={<><Header/><Favorites /><Footer/></>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgetPassword/>}/>
        <Route path="/code-verification" element={<CodeVerfication/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
