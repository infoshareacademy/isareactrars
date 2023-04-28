import { PageWrapper } from "../../common/page-wrapper"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Burger } from "../../common/types";
import { getBurgers } from "../../services/get-burgers";


export const Menu = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);

    useEffect(() => {
        getBurgers()
            .then(data => {
                setBurgers(data);
            })
    }, []);

    return (
        <PageWrapper title="Menu">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Ingredients</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        burgers.map(burger => (
                            <TableRow key={burger.id}>
                                <TableCell>
                                    <Link to={`/menu/${burger.id}`}>{burger.name}</Link>
                                </TableCell>
                                <TableCell align="right">{Object.keys(burger.ingredients).join(', ')}</TableCell>
                                <TableCell align="right">{burger.price}</TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </PageWrapper>
    )
}