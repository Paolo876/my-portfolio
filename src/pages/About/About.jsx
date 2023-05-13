import { useEffect } from 'react'
import DocumentHead from '../../components/DocumentHead'
import Introduction from './Introduction'
import AboutContentList from './AboutContentList'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import useRootRedux from '../../hooks/useRootRedux'
import Contact from "../Home/Contact/Contact"
import { Stack } from '@mui/material'

const About = () => {
  const { getDocumentFromCollection } = useFirestoreActions();
  const { skillsList, setData } = useRootRedux();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
  }, [])

  return (
    <>
      <DocumentHead
        title="Paolo Bugarin | About"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Stack>
        <Introduction/>
        <AboutContentList/>
        <Contact/>
      </Stack>

    </>
  )
}

export default About