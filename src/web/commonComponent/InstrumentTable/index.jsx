import React from 'react';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

const InstrumentTable = ({data=[],column=[]}) =>{
    return(
        <div>
            <TableContainer>
                <Table sx={{minWidth: 300}} aria-label="simple table">
                    <TableHead sx={{
                        borderRadius: "10px",
                        background: "#F2F8FB",
                    }}>
                        <TableRow sx={{
                            // backgroundColor: '#f7f9fc',
                            justifyContent: 'space-between',
                            display: 'revert-layer',
                            borderRadius: "10px",
                            background: "#F2F8FB",
                        }}>
                            {column?.map((col,index)=>(
                                <TableCell sx={{borderBottom: 'none', fontSize: '12px', color: '#64748b', p: {sm: 2, xs: 1}}}>{col?.title}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {data?.map((row) => (
                            <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                {column?.map((col,index)=>(
                                    <TableCell component="th" scope="row"
                                               sx={{fontWeight: '600', color: "#1c2434", fontSize: '0.960rem', p: {sm: 2, xs: 1}}}>
                                        {row[col?.filedName]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default InstrumentTable;
