import { AppBar,Box,Toolbar, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flashGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  MyApps
                  </Typography>
              
                <Button><Link to={'/r'} style={{textDecoration:'none',color: 'white'}}>Registration</Link></Button>
                <Button><Link to={'/t'}style={{ textDecoration: 'none',color: 'white'}}>Table</Link></Button>
                <Button><Link to={'/'} style={{ textDecoration: 'none',color: 'white'}}>First</Link></Button>
                <Button><Link to={'/d'} style={{ textDecoration: 'none',color: 'white'}}>Details</Link></Button>
                <Button><Link to={'/n'} style={{ textDecoration: 'none',color: 'white'}}>New</Link></Button>
                <Button><Link to={'/f'} style={{ textDecoration: 'none',color: 'white'}}>FormBasics</Link></Button>
                <Button><Link to={'/a'} style={{ textDecoration: 'none',color: 'white'}}>ApiBasics</Link></Button>
                <Button><Link to={'/g'} style={{ textDecoration: 'none',color: 'white'}}>GridCard</Link></Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}



export default Navbar
