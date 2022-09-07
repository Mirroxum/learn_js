import React from "react";
import './styles/app.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Error404 from "./components/pages/Error404";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}


export default App;
