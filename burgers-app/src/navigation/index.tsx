import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import logo from '../assets/icon.png';

export const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                    component={NavLink}
                    to="/"
                >
                    <Avatar src={logo} alt="logo"/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
                    Burgers App
                </Typography>
                <Button color="inherit" component={NavLink} to="/menu">Menu</Button>
                <Button color="inherit" component={NavLink} to="/admin">Admin</Button>
            </Toolbar>
        </AppBar>
    )
}