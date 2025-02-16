"use client";
import React from "react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { fuels, yearsOfProduction } from "./filterData";
import styles from "./custom-filter.module.scss";
import { updateSearchParams } from "@/Util";

type Props = {
  title: string;
};

function CustomFilter({ title }: Props) {
  const options = title == "fuel" ? fuels : yearsOfProduction;
  const [selected, setSelected] = useState(options[0]);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    //We pass the title, since we want all the options for one filter type to be under the same search param
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className={styles.customFilter}>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className={styles.listBoxContainer}>
          <ListboxButton className={styles.customFilterButton}>
            <span className={styles.selected}>{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              height={20}
              width={20}
              style={{ marginLeft: "4px", objectFit: "contain" }}
              alt="icon"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration 100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className={styles.customFiltersOptions}>
              {options.map((option) => (
                <ListboxOption
                  value={option}
                  key={option.title + option.value}
                  className={({ active }) =>
                    `${styles.option} ${active ? styles.active : ""}`
                  }
                >
                  {({ selected }) => (
                    <span className={selected ? styles.selectedOption : ""}>
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
