import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, color, capacity) {
    return { name, color, capacity };
}

const rows = [
    createData('Apples', '5', 6),
    createData('Sugar', 'N/A', 4),
];

export default function SimpleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            GROCERY
                        </TableCell>
                        <TableCell >
                            AMOUNT
                        </TableCell>
                        <TableCell >
                            WHEN TO GET
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th':
                                { border: 0 } }}
                        >
                            <TableCell >
                                {row.name}
                            </TableCell>
                            <TableCell sx={{pl:4}}>
                                {row.color}
                            </TableCell>
                            <TableCell sx={{pl:8}} >
                                {row.capacity}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}