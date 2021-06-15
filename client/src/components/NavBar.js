import React from "react";
import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom';



export default function NavBar(){
  return (
    <div>
        <img className={styles.logo} src="https://res.cloudinary.com/nsnc/image/upload/v1623695450/logo_copy_vkphgb.png"></img>
        <hr/>
        <Link to="/home">HOME</Link>
        <Link to="/create">CREATE</Link>

    </div>
      
    
  )
}
