//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//animation
import { AnimatePresence, motion } from "framer-motion";
//import Lyout general design
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="app">
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="cart" element={<Cart />} />
              {/* <Route path=" forgot-passowrd" element={<Cart />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
