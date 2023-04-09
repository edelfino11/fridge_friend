import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardMedia, Grid, Box, Typography, IconButton} from "@mui/material";
import baked_apples from "../img/baked_apples.png";
import apple_pie from "../img/apple_pie.png";
  
const Explore = () => {
  return (
    <div>
    <Navbar />
      <Typography variant="h5" sx={{ pl:5, pt:5, pb:5, fontWeight: 'bold'}} >
        Your Grocery List
     </Typography>
     <Grid container justify = "center" alignItems="center" sx={{ width:'100%'}}>
        <Grid item > 
            <Card sx={{ p:2, m:1, ml:10, display: 'flex', maxWidth:700 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 170 }}
                    image= {apple_pie}
                    alt="Live from space album cover"
                />
                <Box sx={{ p:2, display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Apple Pie!
                    </Typography>
                    <Typography component="div" variant="body1">
                        Based on your fridge ingredients, and personal diet, we recommend making an apple pie!
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Ingredients needed: Apple, Flour, Eggs, Sugar and Butter.
                    </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
        <Grid item > 
            <Card sx={{ p:2, m:1, ml:10, display: 'flex', maxWidth:700 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 170 }}
                    image= {baked_apples}
                    alt="Live from space album cover"
                />
                <Box sx={{ p:2, display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Baked Apples!
                    </Typography>
                    <Typography component="div" variant="body1">
                        Based on your fridge ingredients, and personal diet, we recommend making an baked apples!
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Ingredients needed: Apple, Cinnamon, Sugar, and Butter.
                    </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    </Grid>
    </div>
  );
};
  
export default Explore;