import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const Details = ()  => {
    var[name,setName]= useState("Alex");
    var [data, setData] = useState();
    const inputHandler = (e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    };
    const changeName=()=>{
        console.log("btn clicked");
        setData(name)
    };
  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
      <Typography variant='h3'>Hello {data}</Typography>
             <br />
             <TextField variant='outlined' onChange={inputHandler}/>
             <br /><br />
             <Button variant="contained" onClick={changeName} color="success">Enter</Button>
    </div>
  )
}

export default Details
