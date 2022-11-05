import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderLink from "../HeaderLink"

const Header = () => {
  return   <>
  <div className={styles.header}>
    <div className={styles.teste}>
       <img className={styles.logo} src={logo} alt="logo" />  
          <nav className={styles.nav}>
            <HeaderLink to="/">
                Home
            </HeaderLink>
            <HeaderLink to="/">
                Pokédex
            </HeaderLink>
            <HeaderLink to="/">
                Legendaries
            </HeaderLink>
            <HeaderLink to="/">
               documentation
            </HeaderLink>
          </nav>
           </div>   
    </div>
  </>
};

export default Header;