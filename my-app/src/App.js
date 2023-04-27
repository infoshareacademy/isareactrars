import { Contact } from './Contact';
import { Wrapper } from './Wrapper';
import { MyFavouriteDishes } from './MyFavouriteDishes';
import MyName from './MyName';

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;
