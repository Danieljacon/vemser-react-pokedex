import React from "react";
import banner from "../../assets/banner.png"
import style from "./Body.module.css";


const Body = () => {
  return   <>
             <div className={style.corpo}>
              <div className={style.sec}>
                <p className={style.find}><strong>Find</strong> All Your favorite <strong>Pokemon</strong></p>
                <p className={style.type}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                <button className={style.botao}>See pokemons</button>
                <p className={style.make}>Make with ❤️ for the PokéSpartans team Platzi Master</p>
              </div>
              <div className={style.secti}>
              <img className={style.banner} src={banner} alt="logo" />  
              <p className={style.team}>Ours Team</p>
              </div>
              </div>  
  </>
};

export default Body;