import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AuthContext } from "./context";
import { publicRoutes, privatRoutes } from "./path/path";
 
const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        isAuth
            ? 
            <Routes>
                {privatRoutes.map((route) =>
                    <Route 
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />)}
                <Route path="*" element={<Navigate to="posts" replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) =>
                    <Route 
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />)}
                <Route path="*" element={<Navigate to="login" replace/>}/>
            </Routes>
        
    )
}

export default AppRouter;