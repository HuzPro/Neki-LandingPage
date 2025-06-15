import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

// Optional: Lazy-load future pages like About, Shop, Contact, etc.
// import About from './pages/About';
// import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
      </Routes>
    </>
  );
};

export default App;

