import { DATABASE_URL } from "../constant";

type BurgerData = {
    name: string,
    price: string,
    ingredients: {
        [key: string]: number
    }
} 

export const postBurger = (data: BurgerData): Promise<Response> => {
    return fetch(`${DATABASE_URL}/api/burger`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({...data, restaurant: 3})
    })
}