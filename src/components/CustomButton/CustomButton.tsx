"use client";
import React from "react";
import Image from "next/image";
import styles from "./custom-button.module.scss";
type Props = {
  title: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  customClassName: string;
  rightIcon?: string | undefined;
  action?: () => void;
};

function CustomButton({
  title,
  disabled,
  type,
  customClassName,
  rightIcon,
  action,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={`${styles.customButton} ${styleFactory(customClassName)}`}
      type={type}
      onClick={action}
    >
      <span>{title}</span>
      {rightIcon && (
        <div className={styles.rightIconHolder}>
          <Image src={rightIcon} alt="Icon" fill />
        </div>
      )}
    </button>
  );
}

//gets the button translated button style based on input
function styleFactory(enteredStyle: string): string {
  switch (enteredStyle) {
    case "style1":
      return styles.customStyle1;
    case "style2":
      return styles.customStyle2;
    case "style3":
      return styles.customStyle3;
    default:
      return ""; //fallback
  }
}

export default CustomButton;
