import { PageWrapper } from "../../common/page-wrapper"
import { AddModalButton } from "./add-modal";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { Burger } from "../../common/types";
import { getBurgers } from "../../services/get-burgers";
import { Row } from "./row";
import { EditRow } from "./edit-row";

export const Admin = () => {
    const [editId, setEditId] = useState<number | null>(null);
    const [burgers, setBurgers] = useState<Burger[]>([]);

    const enterEditMode = (id: number) => {
        setEditId(id);
    }

    const cancelEditMode = () => {
        setEditId(null)
    }

    const fetchBurgers = () => {
        getBurgers()
            .then(data => {
                setBurgers(data);
            })
    }

    useEffect(() => {
        fetchBurgers();
    }, []);

    return (
        <PageWrapper title="Admin">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Ingredients</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell sx={{ width: '60px'}}/>
                        <TableCell sx={{ width: '80px'}}/>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        burgers.map(burger => editId === burger.id 
                            ? <EditRow 
                                key={burger.id} 
                                burger={burger} 
                                refresh={fetchBurgers} 
                                cancelEditMode={cancelEditMode} 
                            /> 
                            : <Row 
                                key={burger.id} 
                                burger={burger} 
                                refresh={fetchBurgers} 
                                enterEditMode={enterEditMode} 
                            />
                        )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <AddModalButton refresh={fetchBurgers} />
        </PageWrapper>
    )
}