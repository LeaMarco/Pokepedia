import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.background}>
      <Link to="/home">
        <h1 className={styles.holi} >
          Entrar
        </h1>
      </Link>
    </div>
  );
}

export default Landing;
