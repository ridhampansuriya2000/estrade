import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const StokesTable = ({stokes = 'plus', stokesData}) => {

    const stokesColor = stokes === 'plus' ? '#004c00ab' : '#ff4a4a';

    return (
        <>
            <TableContainer>
                <Table sx={{minWidth: 300}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{
                            backgroundColor: '#f7f9fc',
                            justifyContent: 'space-between',
                            display: 'revert-layer',
                        }}>
                            <TableCell sx={{borderBottom: 'none', fontSize: '12px', color: '#64748b', p: {sm: 2, xs: 1}}}>NAME</TableCell>
                            <TableCell align="center"
                                       sx={{borderBottom: 'none', fontSize: '12px', color: '#64748b', p: {sm: 2, xs: 1}}}>BRAND</TableCell>
                            <TableCell align="center"
                                       sx={{borderBottom: 'none', fontSize: '12px', color: '#64748b', p: {sm: 2, xs: 1}}}>PRICE</TableCell>
                            <TableCell align="center"
                                       sx={{borderBottom: 'none', fontSize: '12px', color: '#64748b', p: {sm: 2, xs: 1}}}>CHANGE</TableCell>
                            <TableCell align="center"
                                       sx={{borderBottom: 'none', fontSize: '12px', color: '#64748b', p: {sm: 2, xs: 1}}}>CHANGE%</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {stokesData.map((row) => (
                            <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row"
                                           sx={{fontWeight: '600', color: "#1c2434", fontSize: '0.960rem', p: {sm: 2, xs: 1}}}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="center" sx={{fontSize: '0.960rem', p: {sm: 2, xs: 1}}}>{row.brand}</TableCell>
                                <TableCell align="center" sx={{fontSize: '0.960rem', p: {sm: 2, xs: 1}}}>{row.price}</TableCell>
                                <TableCell align="center" sx={{fontSize: '0.960rem', color: stokesColor, p: {sm: 2, xs: 1}}}>
                                    {row.change}
                                </TableCell>
                                <TableCell align="center" sx={{fontSize: '0.960rem', color: stokesColor, p: {sm: 2, xs: 1}}}>
                                    {row.changePercent}
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default StokesTable;
