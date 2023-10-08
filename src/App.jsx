import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useFirestoreActions from "./hooks/useFirestoreActions";
import useRootRedux from "./hooks/useRootRedux";

import Navbar from "./components/Navbar/Navbar";
import "./index.scss";

//pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Landing from "./pages/Landing";


function App() {
  const { skillsList, setData, getImageKeys } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
      getImageKeys()
    }
  }, [])

  
  return (
    <div className="App">
      <div className="noise-overlay"></div>
      <Navbar/>
      <Routes>
        {/* <Route element={<Landing/>} path="/"/> */}
        <Route element={<Home/>} path="/"/>
        <Route element={<Projects/>} path="/projects/*"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Contact/>} path="/contact"/>
        
      </Routes>
    </div>
  );
}

export default App;
