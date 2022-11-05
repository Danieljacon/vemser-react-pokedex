import React from "react";
import style from "./InfoCard.module.css";


const InfoCard = () => {
  return   <>
        <div className={style.co}>
            <div className={style.card}>
              <div className={style.teste1}>
              {/* <img
                    className={styles.pokemon}
                    src={`/assets/posts/${post.id}/img.jpg`}
                    alt="Imagem do Post"
                    /> */}
            </div>
              <div className={style.teste2}>
                <div className={style.nomegeracao}>
                   <h1 className={style.nome}><strong>Charizard</strong></h1>
                <h1  className={style.generation}><strong>Generation 1</strong></h1>
                </div>
                  <div className={style.habilidades}>
                  <p className={style.abilidades}><strong>ABILITES:</strong></p>
                  <p className={style.city}>Overgrow - Chlorophyll</p>
                </div>
                <div className={style.points}>
                  <div>
                     <p className={style.abilidades}> <strong>HEALTHY POINTS</strong></p>
                  <p className={style.city}>1 000 000</p>
                  </div>
                  <div className={style.abilidades}><strong>EXPERIENCE</strong>
                  <p className={style.city}>1 000 000</p>
                  </div>
                </div>
                <div className={style.poderes}>
                  <div>
                     <p className={style.abilidades}> <strong>DEFENSE</strong></p>
                  <p className={style.city}>49</p>
                  </div>
                  <div className={style.abilidades}><strong>ATTACK</strong>
                  <p className={style.city}>165</p>
                  </div>
                  <div className={style.abilidades}><strong> SP ATTACK</strong>
                  <p className={style.city}>130</p>
                  </div>
                  <div className={style.abilidades}><strong> SP DEFENSE</strong>
                  <p className={style.city}>130</p>
                  </div>
                </div>




               
                </div>
              </div>
              </div>
          
  </>
};

export default InfoCard;