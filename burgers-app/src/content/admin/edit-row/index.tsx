import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Burger } from '../../../common/types';
import { putBurger } from '../../../services/put-burger';

export const EditRow = ({ burger, refresh, cancelEditMode }: { burger: Burger, refresh: () => void, cancelEditMode: () => void}) => {
    const { register, getValues} = useForm({
        defaultValues: {
            name: burger.name,
            price: burger.price,
            ingredients: Object.keys(burger.ingredients).join(' ')
        }
    });

    const handleSave = () => {
        const values = getValues();
        const formattedIngredients: {
            [key: string]: number
        } = {};
        values.ingredients.split(' ').forEach(i => {
            formattedIngredients[i] = Math.floor(Math.random() * 10)
        })
        const formattedData = {
            ...values,
            ingredients: formattedIngredients
        }

        putBurger(formattedData, burger.id)
            .then(() => {
                cancelEditMode();
                refresh();
            })
    }

    return (
        <TableRow>
            <TableCell>
                <TextField label="Name" size='small' {...register('name')} />
            </TableCell>
            <TableCell align="right">
                <TextField label="Ingredients" size='small' {...register('ingredients')}/>
            </TableCell>
            <TableCell align="right">
                <TextField label="Price" size='small' {...register('price')}/>
            </TableCell>
            <TableCell>
                <Button color="success" onClick={handleSave}>Save</Button>
            </TableCell>
            <TableCell>
                <Button color="secondary" onClick={cancelEditMode}>Cancel</Button>
            </TableCell>
        </TableRow>
    )
}