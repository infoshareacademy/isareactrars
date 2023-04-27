import { Contact } from './Contact';
import { MyFavouriteDishes } from './MyFavouriteDishes';
import MyName from './MyName';

export const AboutMe = () => (
    <>
        <MyName name="Janusz" surname="Kowalski" />
        <MyName name="Janusz" />
        <Contact data={{
            phone: '111 222 333',
            address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
            email: 'moj@mail.com'
        }} />
        <MyFavouriteDishes dishes={[
            { id: 1, name: 'spaghetti'},
            { id: 2, name: 'burger'},
            { id: 3, name: 'stek'},
            { id: 4, name: 'gołąbki'},
        ]} />
    </>
)