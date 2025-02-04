"use client";
import React from "react";
import styles from "../../styles/pages/home-page.module.scss";
import CustomButton from "@/components/CustomButton/CustomButton";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <h1 className={styles.heroTitle}>
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          type="button"
          customClassName={"style1"}
          action={() => {}}
        />
      </div>
      <div className={styles.heroImageContainer}>
        <img src="/hero.png" alt="Hero" className={styles.heroImg} />
        <div className={styles.heroImgOverlay}></div>
      </div>
    </div>
  );
}

export default Hero;
