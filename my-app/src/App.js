import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Game } from './game/Game';
import { Users } from './users/Users';
import { MyForm } from './forms/MyForm';
import { MyBetterForm } from './forms/MyBetterForm';
import { MyBoostedForm } from './forms/MyBoostedForm';

function App() {
  return (
    <>
        <Navigation />
        <Wrapper>
            <Routes>
                <Route path="/" element={<h1>Witaj na mojej stronie!</h1>} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/game" element={<Game name="Counter Strike" />} />
                <Route path="/users" element={<Users />} />
                <Route path="/forms" element={<>
                        <MyBoostedForm />
                        <MyBetterForm />
                        <MyForm />
                    </>} />
            </Routes>
        </Wrapper>
    </>
  );
}

export default App;
