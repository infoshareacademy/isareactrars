import { Route, Routes } from "react-router-dom";

export const Content = () => (
    <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/admin" element={<h1>Admin</h1>} />
    </Routes>
)