import { DATABASE_URL } from "../constant";

type BurgerData = {
    name: string,
    price: string,
    ingredients: {
        [key: string]: number
    }
} 

export const putBurger = (data: BurgerData, id: number): Promise<Response> => {
    return fetch(`${DATABASE_URL}/api/burger/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({...data, restaurant: 3})
    })
}