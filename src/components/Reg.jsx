import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Reg =() => {
    return (
        <div>
             <h1>REGISTRATION FORM</h1>
             <TextField variant="outlined" label='Name'/>
             <br></br>
             <br />
             <TextField variant="outlined" label='Age'/>
             <br />
             <br />
             <TextField variant="outlined" label='Email'/>
             <br />
             <br />
             <TextField variant="outlined" label='Father`s Name'/>
             <br />
             <br />
             <TextField variant="outlined" label='Mother`s Name'/>
             <br />
             <br />
             <TextField variant="standard" label='password '/>
             <br />
            <TextField variant="standard" label='confirm password'/>
            <br />
            <Button variant="contained" color="success">login</Button>
        </div>
    )
}
export default Reg;