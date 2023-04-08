import React from 'react';
import {
  flexbox,
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
  return (
    <div>
      <FlexContainer>
      <Box sx={{ p:4, justifyContent: 'space-between', alignContent: 'space-evenly', width:'40%', order: 1 }}>
      <p>Welcome to your fridge friend!</p>
      <br>
      </br>
      <p>
        Please input your grocery item's name to fill up your fridge friend.
        Be sure to input general grocery names.
        e.g. apples, flour, chicken, etc.
      </p>
      <img src={refrigerator} alt="refrigerator" width='250' height='250'/>
      </Box>
      {/* <input type="text" id="item" name="item"></input>
      <p>Please input your grocery item here!</p>
      <input type="text" id="amount" name="amount"></input>
      <p>Please input amount, N/A if not applicable</p>
      <input type="text" id="unit" name="unit"></input>
      <p>Please input Unit, N/A if not applicable</p> */}
      <Box sx={{ p:4, justifyContent: 'space-between', alignContent: 'space-evenly', width:'40%', pr:2, order: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx = {{pt:2, pb:2}}
      >
      
      {/* <Box justifyContent="center" alignItems="center"> */}
        {/* <Box sx={{pr:2}}> */}
          <TextField
            id="item"
            label="Item"
            variant="outlined"
            helperText="Please input your grocery item here"

            sx={{
              width: 200
            }}
            InputProps={{ sx: { height: 40 } }}
            placeholder="SX + InputProps"
          />
        {/* </Box>
        <Box sx={{pr:2}}> */}
          <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          helperText="Please input amount, N/A if not applicable"
          sx={{
            width: 200
          }}
          InputProps={{ sx: { height: 40 } }}
          placeholder="SX + InputProps"
        />
      {/* </Box>  */}
      <TextField
        id="unit"
        label="Unit"
        variant="outlined"
        helperText="Please input Unit, N/A if not applicable"
        sx={{
          width: 200
        }}
        InputProps={{ sx: { height: 40 } }}
        placeholder="SX + InputProps"
      />
      {/* </Box> */}
      </Grid>
      



      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Expiration Date</TableCell>
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
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
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