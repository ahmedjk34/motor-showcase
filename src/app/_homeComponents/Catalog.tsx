import React, { useEffect } from "react";
import styles from "../../styles/pages/home-page.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import CustomFilter from "@/components/CustomFilter/CustomFilter";
import { getCars } from "@/API";
import CarCard from "@/components/CarCard/CarCard";

async function Catalog({ searchParams }: any) {
  const allCars = await getCars({
    manufacturer: searchParams?.manufacturer ?? "",
    year: searchParams?.year ?? 0,
    fuel: searchParams?.fuel ?? "",
    model: searchParams?.model ?? "",
  });

  return (
    <div className={styles.catalog} id="catalog">
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
      <div>
        {allCars ? (
          <div className={styles.carsWrapper}>
            {allCars.map((car, index) => (
              <CarCard car={car} key={car.make + index} />
            ))}
          </div>
        ) : (
          <div className={styles.noCarsFoundSection}>
            <h1>No Cars Found</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;
