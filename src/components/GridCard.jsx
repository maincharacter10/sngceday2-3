import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GridCard = () => {
    var [pro, setPro]= useState([]);
    useEffect(()=>{
        axios.get("http://fakestoreapi.com/products/category/jewelery")
        .then((res)=>{
            console.log(res)
            setPro(res.data);
        })
        .catch((err)=>{
            console.log(err)

        })
    },[])
  return (
    <div style={{margin:"4%"}}>
      <Grid container spacing={2}>
        {pro.map((value,index)=>{
         return(
            <Grid item xs={12} md={4} key={index}> 
            <Card sx={{ maxWidth: 345 }}>
 <CardMedia
   sx={{ height: 140 }}
   image={value.image}
   title="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
    {value.title}
   </Typography>
   <Typography variant="body2" color="text.secondary">
   {value.price}
   </Typography>
 </CardContent>
 <CardActions>
   <Button size="small">Share</Button>
   <Button size="small">Learn More</Button>
 </CardActions>
</Card>
       </Grid>
         )
        })}
      </Grid>

    </div>
  )
}

export default GridCard
