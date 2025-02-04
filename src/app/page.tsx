import Image from "next/image";
import styles from "../styles/pages/home-page.module.scss";
import Hero from "./_homeComponents/Hero";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
    </div>
  );
}
