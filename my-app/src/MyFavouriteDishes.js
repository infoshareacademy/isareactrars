export const MyFavouriteDishes = ({ dishes }) => (
    <ul>
        {dishes.map(dish => <li key={dish.id}>{dish.name}</li>)}
    </ul>
)