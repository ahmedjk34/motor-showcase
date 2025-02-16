"use client";
import React, { Fragment, useState, useEffect } from "react";
import styles from "./car-details.module.scss";
import { Car } from "@/Types";
import Image from "next/image";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { getCarImageURL } from "@/API";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  car: Car;
};

function CarDetails({ isOpen, setIsOpen, car }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10); // Small delay for smooth animation
    } else {
      setShow(false);
    }
  }, [isOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={setIsOpen}>
        <div className={`${styles.overlay} ${show ? styles.show : ""}`} />
        <div className={`${styles.modalWrapper} ${show ? styles.show : ""}`}>
          <DialogPanel className={styles.modal}>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeBtn}
            >
              ✖
            </button>
            <div className={styles.header}>
              <div className={styles.mainImageWrapper}>
                <Image
                  src={getCarImageURL(car, "")}
                  alt="car model"
                  fill
                  priority
                />
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={getCarImageURL(car, "29")}
                    alt="car model"
                    fill
                    priority
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={getCarImageURL(car, "33")}
                    alt="car model"
                    fill
                    priority
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={getCarImageURL(car, "13")}
                    alt="car model"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div>
                <h2 className={styles.title}>
                  {car.make} {car.model}
                </h2>
              </div>
              <div className={styles.information}>
                {Object.entries(car).map(([key, value], index) => (
                  <div key={index + key}>
                    <h4>{key.split("_").join(" ")}</h4>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CarDetails;
