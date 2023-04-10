import React from 'react';

import Navbar from '../components/Navbar';
import { Grid, Box, Typography} from "@mui/material";
import SimpleTable from '../components/Table';
import grocerylist from "../img/grocery_list.png";

const Grocery = () => {
  return (
    <div>
     <Navbar />
     <Typography variant="h5" sx={{ pl:5, pt:5, fontWeight: 'bold'}} >
        Your Grocery List
     </Typography>
     <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ pl: 4, pr: 4 }} 
      >
        <Box sx={{ width: '30%', pl:1, pr:10 }}>
            <Typography variant="body1" display="block" >
                Welcome to your grocery list, based off your fridge
                or used as ingridients by one of our recommended recipes. 
            </Typography>
            <Typography  sx={{ fontWeight: 'bold', pt:5}} >
                Happy shopping!
            </Typography>
        </Box>
        <Box>
            <SimpleTable />
        </Box>
        <Box sx={{ pl: 10 }}>
            <img src={grocerylist} alt="blue icon" width="40%"/>
        </Box>
      </Grid>
    </div>
  );
};
  
export default Grocery;