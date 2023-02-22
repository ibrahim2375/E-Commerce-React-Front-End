//router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//animation
import { AnimatePresence } from "framer-motion";
//import Lyout general design
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="app">
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<SingleProduct />} />
              <Route
                path="login"
                element={user ? <Navigate to="/" replace /> : <Login />}
              />
              <Route
                path="register"
                element={user ? <Navigate to="/" replace /> : <Register />}
              />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />} />
              <Route path="search" element={<Search />} />
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
