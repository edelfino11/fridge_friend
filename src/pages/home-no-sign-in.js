import React from "react";

import { Box, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const HomeNoSignIn = () => {
    const navigate = useNavigate();

    return (
      <div>
        <Box sx={{ p: 10 }}>
          <React.Fragment>
            <CardContent sx={{ boxShadow: 10 }}>
              <Box sx={{ pb: 4 }}>
                <Typography variant="h4" component="div">
                  Welcome to Fridge Friend!
                </Typography>
              </Box>
              <Typography paragraph>
                We are excited to introduce to you a new way to keep your
                groceries fresh by keeping track of expiration dates,
                recommending you delicious recipes based off your personal
                preferences, and by creating a grocery custom made for your
                tastes.
              </Typography>
              <Typography paragraph>
                {" "}
                In order to use our app, please sign up below:{" "}
              </Typography>
              <Box textAlign="center">
                <Button variant="contained" onClick={()=>navigate("/profile")}>
                  Please Sign In to Continue
                </Button>
              </Box>
            </CardContent>
          </React.Fragment>
        </Box>
      </div>
    );
  
}

export default HomeNoSignIn;
