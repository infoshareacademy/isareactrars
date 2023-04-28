import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postBurger } from '../../../services/post-burger';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px;
`

type FormValues = {
    name: string;
    price: string;
    ingredients: string;
  };

export function AddModal({ isOpen, refresh, close }: { refresh: () => void, isOpen: boolean, close: () => void}) {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        const formattedIngredients: {
            [key: string]: number
        } = {};
        data.ingredients.split(' ').forEach(i => {
            formattedIngredients[i] = Math.floor(Math.random() * 10)
        })
        const formattedData = {
            ...data,
            ingredients: formattedIngredients
        }
        postBurger(formattedData)
            .then(() => {
                refresh();
                close();
            })
    }

    return (
      <Dialog onClose={close} open={isOpen} fullWidth>
        <DialogTitle>Add new burger</DialogTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Name"
                {...register('name')}
            />
            <TextField
                label="Price"
                {...register('price')}
            />
            <TextField
                label="Ingredients"
                {...register('ingredients')}
            />
            <Button type="submit">Save</Button>
        </Form>
      </Dialog>
    );
  }