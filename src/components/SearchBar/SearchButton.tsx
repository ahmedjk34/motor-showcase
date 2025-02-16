import React from "react";
import styles from "./search-bar.module.scss";
import Image from "next/image";
type Props = {
  extraClasses?: string;
};

const SearchButton = ({ extraClasses }: Props) => {
  return (
    <button
      type="submit"
      className={`${styles.seachButton} ${extraClasses ? extraClasses : ""}`}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="search button"
        height={40}
        width={40}
        style={{ objectFit: "contain" }}
      />
    </button>
  );
};

export default SearchButton;
