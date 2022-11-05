import React from "react";
import styles from "./Legendaries.module.css";
import mew from "../../assets/mew.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

const Legendaries = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.box}>
          <h1 className={styles.title}>Legendaries</h1>
          <div className={styles.pokeinfo}>
            <img src={mew} alt="Mew foto" />
            <div>
              <h2>Mew</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.{" "}
              </p>
              <div>
                <span>
                  <small>Healthy Points</small>
                  <p>1000,000</p>
                </span>
                <span>
                  <small>Experiance</small>
                  <p>1000,000</p>
                </span>
                <span>
                  <small>Attack</small>
                  <p>1000,000</p>
                </span>
                <span>
                  <small>Defense</small>
                  <p>1000,000</p>
                </span>
                <span>
                  <small>Special Attack</small>
                  <p>1000,000</p>
                </span>
                <span>
                  <small>Special Defense</small>
                  <p>1000,000</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Swiper
             slidesPerView={3}
             spaceBetween={20}
             centeredSlides={true}
             grabCursor={true}
             loop={true}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
               640: {
                 slidesPerView: 5,
                 spaceBetween: 20,
               },
               768: {
                 slidesPerView: 6,
                 spaceBetween: 20,
               },
               1024: {
                 slidesPerView: 7,
                 spaceBetween: 20,
               },
             }}
             modules={[Pagination]}
             className="mySwiper"
            >
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mew</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                      alt="Mew foto"
                    />
                  </span>
                  <div>
                    <h3>Mewtwo</h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legendaries;
