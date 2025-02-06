import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
type Props = {};

function Nav({}: Props) {
  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={styles.logoContainer}>
        <Image src="/logo.png" alt="logo" height={30} width={200} />
      </Link>
      <CustomButton title="Sign in" customClassName="style2" />
    </nav>
  );
}

export default Nav;
