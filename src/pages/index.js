import React from "react";

import {
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
} from "@mui/material";
import Pitem from "../components/IntroProfileItems/";
import Navbar from '../components/Navbar';

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ pb: 4 }}>
        <Typography variant="h4" component="div">
          Welcome to Fridge Friend!
        </Typography>
      </Box>
      <Typography paragraph>
        We are excited to introduce to you a new way to keep your groceries
        fresh by keeping track of expiration dates, recommending you delicious
        recipes based off your personal preferences, and by creating a grocery
        custom made for your tastes.
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Home = () => {
  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="top"
      >
        <Box sx={{ minWidth: 275, p: 10 }}>
          <Card sx={{ boxShadow: 10, maxWidth: 500 }}>{card}</Card>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ pt: 5, pb: 5}}>
            Follow these simple steps to get started!
          </Typography>
            <Pitem></Pitem>
        </Box>
      </Grid>
    </div>
  );
};

export default Home;
