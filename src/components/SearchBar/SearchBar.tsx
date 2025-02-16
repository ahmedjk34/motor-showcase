"use client";
import React from "react";
import styles from "./search-bar.module.scss";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

function SearchBar({}: Props) {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = (model: string, manufacturer: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (model) {
      params.set("model", model);
    } else {
      params.delete("model");
    }

    if (manufacturer) {
      params.set("manufacturer", manufacturer);
    } else {
      params.delete("manufacturer");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(manufacturer);
    if (manufacturer.trim().length == 0 && model.trim().length == 0) {
      //Add a proper handling way later
      return alert("Please enter data first");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <div className={styles.searchBarItem}>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton extraClasses={styles.mobile} />
      </div>
      <div className={styles.searchBarItem}>
        <Image src="/model-icon.png" width={25} height={25} alt="Car Model" />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className={styles.searchInput}
        />
        <SearchButton extraClasses={styles.mobile} />
      </div>
      <SearchButton extraClasses={styles.desktop} />
    </form>
  );
}

export default SearchBar;
