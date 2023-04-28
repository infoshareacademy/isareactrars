import { Burger } from "../../common/types";
import { DATABASE_URL } from "../constant";

export const getBurgers = (): Promise<Burger[]> => {
    return fetch(`${DATABASE_URL}/api/burger`)
        .then(r => r.json())
}

export const getBurger = (id: string): Promise<Burger | string> => {
    return fetch(`${DATABASE_URL}/api/burger/${id}`)
        .then(r => r.json())
}