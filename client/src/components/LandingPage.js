import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.background}>
      <Link to="/home">
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/nsnc/image/upload/v1623998504/logoPokepedia_copy_wqoep6.png"
      ></img>
        <h1 className={styles.holi}>Entrar</h1>
      </Link>
    </div>
  );
}

export default Landing;
