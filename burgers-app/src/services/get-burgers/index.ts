import { Burger } from "../../common/types";
import { DATABASE_URL } from "../constant";

export const getBurgers = (): Promise<Burger[]> => {
    return fetch(`${DATABASE_URL}/api/burger`)
        .then(r => r.json())
}