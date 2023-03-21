import React from 'react'
import { Container } from '@mui/material';

const PageContainer = ({children}) => <Container maxWidth="xl" sx={{height: "100vh", pt: 8}}>{children}</Container>


export default PageContainer