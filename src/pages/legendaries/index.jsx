import React from "react";
import styles from "./Legendaries.module.css";
import mew from "../../assets/mew.png"

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
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default Legendaries;
