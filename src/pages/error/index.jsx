import React from "react";
import styles from "./Error.module.css";
import image404 from "../../assets/404.png";
import imageRocket from "../../assets/teamRocket.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={`container ${styles.box}`}>
        <img className={styles.image404} src={image404} alt="Error 404" />
        <img className={styles.imageRocket} src={imageRocket} alt="Rocket team" />
        <p>The rocket team has won this time.</p>
        <Link to={"/"}>Return</Link>
      </div>
    </div>
  );
};

export default Error;
