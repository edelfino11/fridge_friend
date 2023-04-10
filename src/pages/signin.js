import React from "react";

import {
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import sign from "../img/sign_in.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  var x = true;
    return (
    <div>
    <Grid
        container
        direction="row"
        justifyContent="right"
        alignItems="center"
      >
        <img
          className="photo"
          src={sign}
          alt="sign in"
          style={{ width: 450, height: 450 }}
        />
        <Box sx={{ minWidth: 275, p: 10 }}>
          <Card sx={{ boxShadow: 10, minWidth: 600, minHeight: 600 }}>
            <CardContent>
              <Box sx={{ pb: 4, m: 5 }}>
                <Typography variant="h4" component="div">
                  Create Account
                </Typography>
              </Box>
              <Box sx={{ m: 5 }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth="true"
                />
              </Box>
              <Box sx={{ m: 5 }}>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  fullWidth="true"
                />
              </Box>
              <Box sx={{ m: 5 }}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth="true"
                />
              </Box>
              <Button
                sx={{ m: 5 }}
                type="submit"
                variant="contained"
                onClick={() => {
                    navigate("/home");
                }}
              >
                Create Account
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </div>
    );
}

export default SignIn;