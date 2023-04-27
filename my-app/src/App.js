import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Game } from './game/Game';
import { Users } from './users/Users';
import { MyForm } from './forms/MyForm';

function App() {
  return (
    <Wrapper>
        <MyForm />
        <Users />
        <Game name="Counter Strike" />
        <AboutMe />
    </Wrapper>
  );
}

export default App;
