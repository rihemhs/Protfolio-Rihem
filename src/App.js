import { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Messages from "./components/Contact/Messages"
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { ThemeProvider } from "./contexts/ThemeContext";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppContent() {
  const [load, updateLoad] = useState(true);
  const { pathname } = useLocation();
  const firstRoute = useRef(true);

  useEffect(() => {
    updateLoad(true);
    const delay = firstRoute.current ? 1000 : 550;
    firstRoute.current = false;
    const timer = setTimeout(() => updateLoad(false), delay);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
