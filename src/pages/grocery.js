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


// change here
function createData(name, amount, unit, date) {
  return { name, amount, unit, date };
}


const rows = [
  createData('Apple', 20, 'N/A', '10 days'),
];


const Grocery = () => {
  return (
    <div>
      <Box sx={{ p:4, justifyContent: 'space-between', alignContent: 'space-evenly', width:'80%', order: 1 }}>
        <h2>Your Grocery List</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">When to Buy</TableCell>
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
      
    </div>
  );
};
  
export default Grocery;