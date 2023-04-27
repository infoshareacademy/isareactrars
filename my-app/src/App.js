import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Game } from './game/Game';
import { Users } from './users/Users';
import { MyForm } from './forms/MyForm';
import { MyBetterForm } from './forms/MyBetterForm';
import { MyBoostedForm } from './forms/MyBoostedForm';

function App() {
  return (
    <Wrapper>
        <MyBoostedForm />
        <MyBetterForm />
        <MyForm />
        <Users />
        <Game name="Counter Strike" />
        <AboutMe />
    </Wrapper>
  );
}

export default App;
