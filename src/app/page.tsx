import Image from "next/image";
import styles from "../styles/pages/home-page.module.scss";
import Hero from "./_homeComponents/Hero";
import Catalog from "./_homeComponents/Catalog";

export default function Home({ searchParams }: any) {
  return (
    <div className={styles.homePage}>
      <Hero />
      <Catalog searchParams={searchParams} />
    </div>
  );
}
