import { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import DocumentHead from '../../components/DocumentHead'
import Introduction from './Introduction'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import useRootRedux from '../../hooks/useRootRedux'
import Contact from "../Home/Contact/Contact"
import { Stack } from '@mui/material'
import Skills from './Skills/Skills';
import Roadmap from './Roadmap/Roadmap';
import Process from './Process/Process';


const About = () => {
  const { getDocumentFromCollection } = useFirestoreActions();
  const { skillsList, setData } = useRootRedux();
  const { pathname } = useLocation();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
  }, [])
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <DocumentHead
        title="Paolo Bugarin | About"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Stack>
        <Introduction/>
        <Skills/>
        <Process/>
        <Roadmap/>
        <Contact/>
      </Stack>

    </>
  )
}

export default About