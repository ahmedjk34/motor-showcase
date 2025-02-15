"use client";
import React, { Fragment, useState, useEffect } from "react";
import styles from "./car-details.module.scss";
import { Car } from "@/Types";
import Image from "next/image";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";

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
        {/* Background Overlay */}
        <div className={`${styles.overlay} ${show ? styles.show : ""}`} />

        {/* Modal Content */}
        <div className={`${styles.modalWrapper} ${show ? styles.show : ""}`}>
          <DialogPanel className={styles.modal}>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeBtn}
            >
              ✖
            </button>
            <h2 className={styles.title}>{car.make}</h2>
            <Image src={"/logo.png"} alt={car.make} width={500} height={300} />
            <p className={styles.description}>{car.model}</p>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CarDetails;
