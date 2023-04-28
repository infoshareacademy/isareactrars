import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const Sign = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return <>
        <TextField label="Email" />
        <TextField label="Password" type="password" />
        <Button onClick={handleClick}>Log in</Button>
    </>
}