import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
    var [product, setproduct] = useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((response) =>{
            console.log(response.data)
            setproduct(response.data)
    })
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
         {product.map((val) => {
              return (
          <Grid item xs={4}>
               <Card sx={{ maxWidth: 450 }}>
                     <CardActionArea>
                         <CardMedia
                              component="img"
                              height="325"
                              image={val.image}
                            //   alt={val.title}
                            />
                     <CardContent>
                           <Typography gutterBottom variant="h5" component="div">
                            {val.title}
                           </Typography>
                            <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                                {val.price}
                             </Typography>
                             <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                                {val.category}
                             </Typography>
                      </CardContent>
                     </CardActionArea>
                </Card>
           </Grid>
            )
        })}
          </Grid>
        </Box>
    </div>
  )
}

export default Dashboard