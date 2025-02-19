import styles from "../styles/pages/home-page.module.scss";
import Hero from "./_homeComponents/Hero";
import Catalog from "./_homeComponents/Catalog";

export default async function Home({ searchParams }: any) {
  const resolvedSearchParams = await searchParams; // Await search params
  return (
    <div className={styles.homePage}>
      <Hero />
      <Catalog searchParams={resolvedSearchParams} />
    </div>
  );
}
