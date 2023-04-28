import {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sign } from './sign/Sign';
import { Game } from './game/Game';
import { Users } from './users/Users';
import { MyForm } from './forms/MyForm';
import { MyBetterForm } from './forms/MyBetterForm';
import { MyBoostedForm } from './forms/MyBoostedForm';
import { Wrapper } from './Wrapper';
import { UserDetails } from './users/UserDetails';
import { CircularProgress } from '@mui/material';

const LazyAboutMe = lazy(() => import('./about-me/AboutMe')
    .then(module => ({ default: module.AboutMe})))

export const Content = () => (
    <Wrapper>
        <Suspense fallback={<CircularProgress />}>
            <Routes>
                <Route path="/" element={<h1>Witaj na mojej stronie!</h1>} />
                <Route path="/about-me" element={<LazyAboutMe />} />
                <Route path="/game" element={<Game name="Counter Strike" />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/forms" element={<>
                        <MyBoostedForm />
                        <MyBetterForm />
                        <MyForm />
                    </>} />
                <Route path="/sign" element={<Sign />} />
            </Routes>
        </Suspense>
    </Wrapper>  
)