export type Burger = {
    name: string,
    price: string,
    restaurant: number,
    id: number,
    ingredients: {
        [key: string]: number
    }
}