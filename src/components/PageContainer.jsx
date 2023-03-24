import React from 'react'
import { Container } from '@mui/material';

const PageContainer = ({children, maxWidth="xl"}) => <Container maxWidth={maxWidth} sx={{height: "100vh", pt: 8}}>{children}</Container>


export default PageContainer