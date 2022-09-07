import React from "react";
import { Navigate, Route, Routes } from "react-router";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import PostsPage from "./pages/PostPages";
import Posts from "./pages/Posts";
 
const AppRouter = () => {
    const isAuth = true;
    return (
    <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/posts/:id" element={<PostsPage/>} />
    </Routes>
    )
}

export default AppRouter;