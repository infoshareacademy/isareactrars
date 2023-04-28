import { DATABASE_URL } from "../constant";

export const deleteBurger = (id: number): Promise<Response> => {
    return fetch(`${DATABASE_URL}/api/burger/${id}`, {
        method: 'DELETE'
    })
}