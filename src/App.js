import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;
