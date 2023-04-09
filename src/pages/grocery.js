import React from 'react';
import Navbar from '../components/Navbar';
import { Grid, Box, CardContent, Typography, Button } from "@mui/material";
import SimpleTable from '../components/Table';
import grocerylist from "../img/grocery_list.png";
import { useNavigate } from "react-router-dom";

const Grocery = () => {
  const navigate = useNavigate();
  return (
    <div>
     <Navbar />
     <Typography variant="h4" sx={{ p: 5, fontWeight: 'bold'}} >
        Your Grocery List
     </Typography>
     <Grid
        container
        direction="row"
        // justifyContent="center"
        alignItems="center"
        sx={{ pl: 5, pr: 5 }} 
      >
        <Box sx={{ width: '30%' , p: 5 }}>
            <Typography variant="body1" display="block" >
                Welcome to your grocery list, based off your fridge
                or ingridients used by our recommended recipes. 
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