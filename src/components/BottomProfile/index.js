import * as React from "react";
import {
  FormHelperText,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Grid,
  TextField,
  Button,
  Card,
  Box,
  CardContent,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ pb: 4 }}>
        <Typography variant="h5" component="div">
          Welcome to your profile
        </Typography>
      </Box>
      <Typography paragraph>
        Please fill out the questionnaire to your right in order for your Fridge
        Friend to help you keep track of your grocery list and recommend you
        delicious food!
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function BottomProfile() {
  const [allergies, setallergies] = React.useState({
    vegetarian: false,
    vegan: false,
    halal: false,
    kosher: false,
    lactose: false,
  });

  const { vegetarian, vegan, halal, kosher, lactose } = allergies;

  const handleFlavorChange = (event) => {
    setallergies({ ...allergies, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container direction="row">
      <Box sx={{ minWidth: 275, p: 10 }}>
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
          {card}
        </Card>
      </Box>
      <FormControl sx={{ p: 10 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Pick allergies</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={vegetarian}
                  onChange={handleFlavorChange}
                  name="vegetarian"
                />
              }
              label="Vegetarian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vegan}
                  onChange={handleFlavorChange}
                  name="vegan"
                />
              }
              label="Vegan"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={halal}
                  onChange={handleFlavorChange}
                  name="halal"
                />
              }
              label="Halal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={kosher}
                  onChange={handleFlavorChange}
                  name="kosher"
                />
              }
              label="Kosher"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={lactose}
                  onChange={handleFlavorChange}
                  name="lactose"
                />
              }
              label="Lactose"
            />
            <Button type="submit">Submit</Button>
          </FormGroup>
          <FormHelperText>
            Please select all option that apply to you.
          </FormHelperText>
        </FormControl>
      </FormControl>
      <Box sx={{ p: 10 }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          helperText="Please input specific allergens"
        />
      </Box>
    </Grid>
  );
}
