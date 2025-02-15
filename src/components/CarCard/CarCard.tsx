"use client";
import { Car } from "@/Types";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./CarCard.module.scss";
import { calculateCarRent } from "@/Util";
import CarDetails from "../CarDetails/CarDetails";
type Props = {
  car: Car;
};

function CarCard({ car }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const carRentalPrice = calculateCarRent(car.city_mpg, car.year);
  return (
    <div className={styles.carCard}>
      <div className={styles.content}>
        <h2 className={styles.carTitle}>
          {car.make} {car.model}
        </h2>
      </div>
      <p className={styles.rentalDetails}>
        <span>$</span>
        {carRentalPrice}
        <span>/day</span>
      </p>

      <div className={styles.imageWrapper}>
        <Image src="/hero.png" alt={car.make + " " + car.model} fill priority />
      </div>

      <div className={styles.carInfoWrapper}>
        <div className={styles.carInfo}>
          <div className={styles.infoItem}>
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p>{car.transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className={styles.infoItem}>
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p>{car.drive.toUpperCase()}</p>
          </div>
          <div className={styles.infoItem}>
            <Image src={"/gas.svg"} width={20} height={20} alt="gas" />
            <p>{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <CustomButton
            title="View More"
            customClassName="style3"
            rightIcon="/right-arrow.svg"
            action={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} setIsOpen={setIsOpen} car={car} />
    </div>
  );
}

export default CarCard;
