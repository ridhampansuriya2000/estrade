import React from 'react';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {Box, Typography} from "@mui/material";

const InstrumentTable = ({data = [], column = []}) => {
    return (
        <Box sx={{display: "flex", width: '100%', pl:{md: 1,xs:0}}}>
            <TableContainer>
                <Table sx={{minWidth: 300}} aria-label="simple table">
                    <TableHead sx={{borderRadius: "10px", background: "#F2F8FB",mb: 5}}>
                        <TableRow sx={newStyle.tableHead}>
                            {column?.map((col, index, arr) => {
                                const firstHead = index === 0
                                const lastHead = arr.length - 1 === index
                                const isEven = (number) => (number !== 0 && number % 2 === 0);
                                return (<>
                                    {isEven(index) && <Typography style={{
                                        color: '#E1E8EA', fontSize: '29px', marginTop: '8px',
                                        display: isEven(index) ? 'flex' : 'none'
                                    }}>|</Typography>}

                                    <TableCell sx={{
                                        whiteSpace: 'nowrap',
                                        textAlign: 'center',
                                        borderBottom: 'none', fontSize: '14px', color: '#3D454E', p: {sm: 2, xs: 1},
                                        borderTopLeftRadius: firstHead ? '10px' : '0px',
                                        borderBottomLeftRadius: firstHead ? '10px' : '0px',
                                        borderTopRightRadius: lastHead ? '10px' : '0px',
                                        borderBottomRightRadius: lastHead ? '10px' : '0px',
                                    }}>{col?.title}</TableCell>
                                </>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{mt:0}}>
                        <TableRow  sx={{'&:last-child td, &:last-child th': {border: 0},backgroundColor: '#F2F8FB'}}>
                            <TableCell colSpan={2} sx={{border: 0}}/>
                            <TableCell colSpan={3} rowSpan={1} sx={newStyle.tableBodyTitle}>Long Trades</TableCell>
                            <TableCell colSpan={3} rowSpan={1} sx={newStyle.tableBodyTitle}>Short Trades</TableCell>
                        </TableRow>
                        {data?.map((row, index) => {
                            return (<>
                                <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border: 0},backgroundColor: '#F2F8FB'}}>
                                    {column?.map((col, index) => {
                                        const isEven = (number) => (number !== 0 && number % 2 === 0);
                                        const tread = col?.filedName.includes('tread');
                                        return (<>
                                            {isEven(index) && <span style={{display: isEven(index) ? 'flex' : 'none'}}></span>}
                                            <TableCell component="th" scope="row"
                                                       sx={newStyle.tableCell}>
                                                {row[col?.filedName]}
                                            </TableCell>
                                        </>)
                                    })}
                                </TableRow>
                            </>)
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
};

export default InstrumentTable;
const newStyle = {
    tableHead: {
        justifyContent: 'space-between',
        display: 'revert-layer',
        borderRadius: "10px",
        background: "#F2F8FB",
    },
    tableBodyTitle:{textAlign: 'center',color: '#3D454E',opacity: '0.8',border: 0},
    tableCell:{
        borderBottom: 'none',
        textAlign: 'center',
        fontWeight: '500',
        color: "#3D454E",
        fontSize: '0.960rem',
        p: {sm: 2, xs: 1},
        opacity: '0.8',
    }
};
