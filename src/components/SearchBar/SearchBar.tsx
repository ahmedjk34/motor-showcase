"use client";
import React from "react";
import styles from "./search-bar.module.scss";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

type Props = {};

function SearchBar({}: Props) {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <div className={styles.searchBarItem}>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
