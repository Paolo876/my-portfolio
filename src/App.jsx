import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.scss";

//pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing";


function App() {
  return (
    <div className="App">
      <div className="noise-overlay"></div>
      <Navbar/>
      <Routes>
        <Route element={<Landing/>} path="/"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Projects/>} path="/projects"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<Contact/>} path="/contact"/>
      </Routes>
    </div>
  );
}

export default App;
