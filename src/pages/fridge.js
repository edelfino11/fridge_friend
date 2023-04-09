import React from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import refrigerator from "../img/refrigerator.png";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

const FlexContainer = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    {children}
  </Box>
);


// change here
function createData(name, amount, unit, date) {
  return { name, amount, unit, date };
}


const rows = [
  createData('Apple', 20, 'N/A', '10 days'),
];

const Fridge = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <FlexContainer>
      <Grid container justify = "center" alignItems="center" sx={{ p:4, width:'30%'}}>
        <Typography variant="h5" sx={{ p:2, fontWeight: 'bold'}} >
            Welcome to your fridge friend!
            </Typography>
        <Typography variant="body1" sx={{ pl: 2, pr:2}}>
            Please input your grocery item's name to fill up your fridge friend.
            Be sure to input general grocery names.
            e.g. apples, flour, chicken, etc.
        </Typography>
        <Grid item sx={{ p: 6 }}>
            <img src={refrigerator} alt="refrigerator" width='250' height='250'/>
        </Grid>
      </Grid>
      {/* <input type="text" id="item" name="item"></input>
      <p>Please input your grocery item here!</p>
      <input type="text" id="amount" name="amount"></input>
      <p>Please input amount, N/A if not applicable</p>
      <input type="text" id="unit" name="unit"></input>
      <p>Please input Unit, N/A if not applicable</p> */}
      <Box sx={{ p:4, justifyContent: 'space-between', alignContent: 'space-evenly', pr:2, order: 2 }}>
      <Grid
        direction="row"
        spacing={0}
        alignItems="center"
        justify="center"
        sx = {{pt:2, pb:2}}
      >
          <TextField
            id="item"
            label="Item"
            variant="outlined"
            helperText="Please input your grocery item here"
            sx={{ width: 150, m:2}}
            placeholder="item"/>
          <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          helperText="Please input amount, N/A if not applicable"
          sx={{
            width: 150, m:2
          }}
          placeholder="amount"
        />
      <TextField
        id="unit"
        label="Unit"
        variant="outlined"
        helperText="Please input Unit, N/A if not applicable"
        sx={{
          width: 150, m:2
        }}
        placeholder="unit"
      />
      <Button sx={{ m: 3 }} type="submit" variant="contained"onClick={() => { navigate("/home"); }}>
        Submit Item
      </Button>
      </Grid>

      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food Name</TableCell>
            <TableCell >Amount</TableCell>
            <TableCell >Unit</TableCell>
            <TableCell >Expiration Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.unit}</TableCell>
              <TableCell >{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </FlexContainer>
    </div>
  );
};
  
export default Fridge;