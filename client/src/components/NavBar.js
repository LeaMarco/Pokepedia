import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/nsnc/image/upload/v1624033721/logoPokepedia_copy_shxmfc.png"
      ></img>
      <div className={styles.buttons}>
      <Link to="/home">
        <button className={styles.button}>Home</button>
      </Link>
      <Link to="/create">
      <button className={styles.button}>Create</button>
      </Link>
      </div>
      <hr />
    </div>
  );
}
