import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <Container>test</Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
