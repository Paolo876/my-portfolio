import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./index.scss";

//components
import Navbar from "./components/Navbar/Navbar";

//hooks
import useFirestoreActions from "./hooks/useFirestoreActions";
import useRootRedux from "./hooks/useRootRedux";
import useProjectsRedux from "./hooks/useProjectsRedux";

//pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoadingIcon from "./components/LoadingIcon";


function App() {
  const { setData, getImageKeys, isLoading, getEmailJSKeys } = useRootRedux();
  const { getProjects } = useProjectsRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  const [ isInitLoading, setIsInitLoading ] = useState(true);
  const [ error, setError ] = useState(false)
  
  //run on init
  useEffect(() => {
    initFunctions();
  }, [])

  const initFunctions = async () => {
    try {
      setIsInitLoading(true)
      getImageKeys()
      getProjects()
      getEmailJSKeys()
      const data = await getDocumentFromCollection('user', 'information')
      setData(data);
      setIsInitLoading(false)
    } catch(err) {
      setIsInitLoading(false)
      setError(true);
    }

  }
  return (
    <div className="App">
      <div className="noise-overlay"></div>
      {(isLoading || isInitLoading) && <Box 
        sx={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 500,
          backdropFilter: "blur(15px) brightness(10%)",
          background: "black"
        }}
      >
        <LoadingIcon/>
      </Box>}
      {!isLoading && !isInitLoading && <>
        <Navbar/>
        <div>
          <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Projects/>} path="/projects/*"/>
            <Route element={<About/>} path="/about"/>
            <Route element={<Contact/>} path="/contact"/>
          </Routes>
        </div>
      </>}
    </div>
  );
}

export default App;
