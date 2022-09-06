import React from "react";
import classes from "./MyLoader.module.css";


const MyLoader = (props) => {
    return (
        <div {...props} className={classes.loader}>

        </div>
    );
};

export default MyLoader