import { Route, Routes } from "react-router-dom";
import { Menu } from './menu';
import { Home } from './home';
import { Admin } from './admin';

export const Content = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
)