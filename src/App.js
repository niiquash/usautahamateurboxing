import Navbar from "./components/navigation/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Leadership from "./pages/leadership/Leadership";
import Membership from "./pages/membership/Membership";
import Shows from "./pages/shows/Shows";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import About from "./components/about/About";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
