import React, { useState, Fragment } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import styles from "./search-bar.module.scss";
import Image from "next/image";
import { manufacturers } from "./data";

type Props = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

function SearchManufacturer({ manufacturer, setManufacturer }: Props) {
  const [query, setQuery] = useState<string>("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={styles.searchManufacturer}>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div style={{ width: "100%", position: "relative" }}>
          <ComboboxButton className={styles.comboBoxButton}>
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
              style={{ marginLeft: "4px" }}
            />
          </ComboboxButton>
          <ComboboxInput
            className={styles.searchInput}
            placeholder="Volkswagen"
            displayValue={(value: string) => value}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions className={styles.comboBoxOptionsContainer}>
              {filteredManufacturers.slice(0, 12).map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `${styles.comboBoxItem} ${active ? styles.active : ""}`
                  }
                >
                  {item}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
