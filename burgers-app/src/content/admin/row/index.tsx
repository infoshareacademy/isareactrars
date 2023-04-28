import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Burger } from '../../../common/types';
import { deleteBurger } from '../../../services/delete-burger';

export const Row = ({ burger, refresh, enterEditMode }: { burger: Burger, refresh: () => void, enterEditMode: (id: number) => void}) => {
    const handleDelete = () => {
        deleteBurger(burger.id)
            .then(() => {
                refresh();
            })
    }

    const handleEdit = () => {
        enterEditMode(burger.id);
    }

    return (
        <TableRow>
            <TableCell>{burger.name}</TableCell>
            <TableCell align="right">{Object.keys(burger.ingredients).join(', ')}</TableCell>
            <TableCell align="right">{burger.price}</TableCell>
            <TableCell>
                <Button onClick={handleEdit}>Edit</Button>
            </TableCell>
            <TableCell>
                <Button onClick={handleDelete} color="error">Delete</Button>
            </TableCell>
        </TableRow>
    )
}