import React from 'react'
import './first.css'
import { Button, ButtonBase, TextField, Typography } from '@mui/material'


const First = () => {
  return (
    <div> 
      <h1>Login page</h1>
      <input type="text" placeholder='username'/>
      <br></br>
      <input type="password" placeholder='password'/>
      <br></br>
      <button>login</button>
      <br></br>
      <br></br>
      <br></br>
      <TextField variant="outlined" label='username'/>
      <br /><br />
      <TextField variant="filled" type="password" label='password'/>
      <br></br>
      <TextField variant="standard" label='confirm password'/>
      <br></br>
      <br></br>
      <Button variant="contained" color="success">login</Button>
    </div>
  );
};

export default First

