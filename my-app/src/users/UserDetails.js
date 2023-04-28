import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CircularProgress } from '@mui/material';

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(r => {
                if (!r.ok) {
                    setError(Error('404'))
                }
                return r.json()
            })
            .then(data => {
                setUser(data);
            })
            .catch(err => {
                setError(err);
            })
    }, []);

    if (error) {
        return <h1>Wystapił błąd. Spróbuj ponownie.</h1>
    }

    if (!user) {
        return <CircularProgress />;
    }

    return <h1>Witaj {user.name}!</h1>
}