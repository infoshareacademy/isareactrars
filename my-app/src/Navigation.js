import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Navigation = () => {
    return <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
          My App
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Game</Button>
        <Button color="inherit">Users</Button>
        <Button color="inherit">Forms</Button>
        <Button color="inherit">About me</Button>
      </Toolbar>
    </AppBar>
}