import React from 'react'
import { Button, Paper, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <div>
        <Typography variant="h1">hello</Typography>
        <Paper>
          <Button variant="outlined" color="primary">BUTTON</Button>
          <Button variant="contained" color="primary">BUTTON</Button>

        </Paper>

    </div>
  )
}

export default Navbar