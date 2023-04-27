import { Contact } from './Contact';
import MyName from './MyName';

function App() {
  return (
    <>
        <MyName name="Janusz" surname="Kowalski" />
        <MyName name="Janusz" />
        <Contact data={{
            phone: '111 222 333',
            address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
            email: 'moj@mail.com'
        }} />
    </>
  );
}

export default App;
