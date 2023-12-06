//import Header from "./components/Header";
// import { Footer,Header } from "./components/Header";
// import { Main } from "./components/Main";
// import {LifeCycle} from "./components/LifeCycle"
// import { OneWayBinding } from "./components/OneWayBinding";
// import { Example } from "./components/AxiosExample";
// import { F2 } from "./components/F2";
import { Header } from "./components_for_meesho/Header";
import { Footer } from "./components_for_meesho/Footer";
import { Main } from "./components_for_meesho/Main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components_for_meesho/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home } from "./components_for_meesho/Chunk";
function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
