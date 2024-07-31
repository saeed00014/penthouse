import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./page/home/home";
import Shop from "./page/shop/shop";
import Design from "./page/design/design";
import ProductPage from "./page/product/productPage";
import Card from "./page/card/card";

function App() {
  return (
    <div className="directionDiv flex flex-col items-center h-[100vh] w-[100vw] overflow-y-scroll overflow-x-hidden bg-gray-100">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/design" element={<Design />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
