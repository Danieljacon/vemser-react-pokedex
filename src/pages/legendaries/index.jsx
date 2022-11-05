import React, { useState } from "react";
import styles from "./Legendaries.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import legendariesPokemons from "../../json/legendaries.json";

const Legendaries = () => {
  const [poke, setPoke] = useState([]);
  const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data);
    return setPoke(data);
  };
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.box}>
          <h1 className={styles.title}>Legendaries</h1>
          {poke.length !== 0 ? (
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
                    {poke.types.map((type) => {
                      return (
                        <span className={styles.block}>{type.type.name}</span>
                      );
                    })}
                  </span>
                  <div>
                    <p className={styles.subtype}>Abilities</p>
                    {poke.abilities.map((ability) => {
                      return (
                        <span className={styles.block}>
                          {ability.ability.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  {poke.stats.map((stat) => {
                    return (
                      <span>
                        <small className={styles.subtype}>
                          {stat.stat.name}
                        </small>
                        <p>{stat.base_stat}</p>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <h1>Selecione um Pokémon!</h1>
          )}
          <div>
            <Swiper
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              {legendariesPokemons.map((pokemon) => {
                return (
                  <SwiperSlide
                    key={pokemon.id}
                    onClick={() => getPokemon(pokemon.id)}
                  >
                    <div className={styles.card}>
                      <span>
                        <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                          alt="Mew foto"
                        />
                      </span>
                      <div>
                        <h3>{pokemon.name}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legendaries;
