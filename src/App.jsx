import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.scss";

//components
import Navbar from "./components/Navbar/Navbar";

//hooks
import useFirestoreActions from "./hooks/useFirestoreActions";
import useRootRedux from "./hooks/useRootRedux";

//pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


function App() {
  const { setData, getImageKeys, isLoading } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  //run on init
  useEffect(() => {
    getImageKeys()
    getDocumentFromCollection('user', 'information').then(data => setData(data))
    // if(skillsList.length === 0){
    //   getDocumentFromCollection('user', 'information').then(data => setData(data))
    // }
  }, [])

  
  return (
    <div className="App">
      <div className="noise-overlay"></div>
      <Navbar/>

      {!isLoading && <div>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Projects/>} path="/projects/*"/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Contact/>} path="/contact"/>
        </Routes>
      </div>}
    </div>
  );
}

export default App;
