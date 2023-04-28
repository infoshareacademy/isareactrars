import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { PageWrapper } from "../../../common/page-wrapper"
import { Burger } from "../../../common/types"
import { getBurger } from "../../../services/get-burgers";

export const Details = () => {
    const params = useParams();
    const [burger, setBurger] = useState<Burger | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const renderIngredients = () => {
        if (burger) {
            return <ul>
                {Object.keys(burger.ingredients).map(key => (
                    <li key={key}>{key}: {burger.ingredients[key]}</li>
                ))}
            </ul>
        }
    }

    useEffect(() => {
        if (params.id) {
            getBurger(params.id)
                .then(data => {
                    if (typeof data === 'string') {
                        setError(Error(data)) 
                    } else {
                        setBurger(data);
                    }
                })
                .catch(err => setError(err))
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, []);

    return <PageWrapper title={burger?.name}>
        {isLoading 
            ? <CircularProgress />
            : <>
                <Typography>{error ? error.message : burger?.price}</Typography>
                {renderIngredients()}
            </>
        }
    </PageWrapper>
}