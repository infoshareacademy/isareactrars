import { PageWrapper } from "../../common/page-wrapper"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

type Burger = {
    name: string,
    price: string,
    restaurant: number,
    id: number,
    ingredients: {
        [key: string]: number
    }
}

export const Menu = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/burger')
            .then(r => r.json())
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
                                <TableCell>{burger.name}</TableCell>
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