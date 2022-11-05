import React from "react";
import styles from "./LegendariesInfos.module.css";

const LegendariesInfos = ({ poke }) => {
  return (
    <div className={styles.pokeinfo}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
        alt="Mew foto"
      />
      <div>
        <h2>{poke.name}</h2>
        <div>
          <span>
            <p className={styles.subtype}>Types</p>
            {poke.types.map((type, i) => {
              return (
                <span key={i} className={styles.block}>
                  {type.type.name}
                </span>
              );
            })}
          </span>
          <div>
            <p className={styles.subtype}>Abilities</p>
            {poke.abilities.map((ability, i) => {
              return (
                <span key={i} className={styles.block}>
                  {ability.ability.name}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          {poke.stats.map((stat, i) => {
            return (
              <span key={i}>
                <small className={styles.subtype}>{stat.stat.name}</small>
                <p>{stat.base_stat}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LegendariesInfos;
