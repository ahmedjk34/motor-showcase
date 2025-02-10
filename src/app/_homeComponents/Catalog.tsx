import React from "react";
import styles from "../../styles/pages/home-page.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import CustomFilter from "@/components/CustomFilter/CustomFilter";
type Props = {};

function Catalog({}: Props) {
  return (
    <div className={styles.catalog}>
      <div className={styles.titleHolder}>
        <h1>Car Catalog</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className={styles.searchFilters}>
        <SearchBar />
        <div className={styles.filtersContainer}>
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
