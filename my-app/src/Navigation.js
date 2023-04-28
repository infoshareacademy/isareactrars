import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLanguageContext } from './contexts/LanguageContext';

const links = [
    { label: 'Home', path: '/' },
    { label: 'Game', path: '/game' },
    { label: 'Users', path: '/users' },
    { label: 'Forms', path: '/forms' },
    { label: 'About me', path: '/about-me' },
    { label: 'Sign', path: '/sign' },
];

const getActiveStyles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : undefined})

export const Navigation = () => {
    const { setLang } = useLanguageContext();

    return <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
          My App
        </Typography>
        {
            links.map(link => (
                <Button key={link.path} color="inherit" component={NavLink} style={getActiveStyles} to={link.path}>{link.label}</Button>
            ))
        }
        <div style={{ flexGrow: 1 }} />
        <Button color="inherit" onClick={() => setLang('pl')}>PL</Button>
        <Button color="inherit" onClick={() => setLang('en')}>EN</Button>
      </Toolbar>
    </AppBar>
}