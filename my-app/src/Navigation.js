import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const links = [
    { label: 'Home', path: '/' },
    { label: 'Game', path: '/game' },
    { label: 'Users', path: '/users' },
    { label: 'Forms', path: '/forms' },
    { label: 'About me', path: '/about-me' },
];

const getActiveStyles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : undefined})

export const Navigation = () => {
    return <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
          My App
        </Typography>
        {
            links.map(link => (
                <Button color="inherit" component={NavLink} style={getActiveStyles} to={link.path}>{link.label}</Button>
            ))
        }
      </Toolbar>
    </AppBar>
}