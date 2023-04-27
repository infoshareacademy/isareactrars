import { Contact } from './Contact';
import { ContactStyled } from './ContactStyled';
import { MyFavouriteDishes } from './MyFavouriteDishes';
import MyName from './MyName';

const contactData = {
    phone: '111 222 333',
    address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
    email: 'moj@mail.com'
};

export const AboutMe = () => (
    <>
        <MyName name="Janusz" surname="Kowalski" />
        <MyName name="Janusz" />
        <Contact data={contactData} />
        <ContactStyled data={contactData} />
        <MyFavouriteDishes dishes={[
            { id: 1, name: 'spaghetti'},
            { id: 2, name: 'burger'},
            { id: 3, name: 'stek'},
            { id: 4, name: 'gołąbki'},
        ]} />
    </>
)