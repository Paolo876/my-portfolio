import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.scss";

//pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
