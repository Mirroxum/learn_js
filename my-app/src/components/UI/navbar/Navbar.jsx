import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context";
import MyButton from "../button/MyButton";
import classes from "./Navbar.module.css";


const Navbar = () => {
    
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logOut = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
    }

    return (
      <div className={classes.navbar}>
        <div className={classes.navbar__content}>
          <NavLink className={classes.navbar__links} to={"/"}>Главная</NavLink>
          <NavLink className={classes.navbar__links} to={"/about"}>О сайте</NavLink>
          <NavLink className={classes.navbar__links} to={"/login"}>Логин</NavLink>
          <button className={classes.navbar__button}onClick={() => logOut()}>Выйти</button>
        </div>
      </div>
    );
};

export default Navbar