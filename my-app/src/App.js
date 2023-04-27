import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Game } from './game/Game';

function App() {
  return (
    <Wrapper>
        <Game name="Counter Strike" />
        <AboutMe />
    </Wrapper>
  );
}

export default App;
