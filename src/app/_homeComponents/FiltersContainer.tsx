"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import CustomFilter from "@/components/CustomFilter/CustomFilter";
import styles from "../../styles/pages/home-page.module.scss";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function FiltersContainer() {
  const router = useRouter();
  const pathname = usePathname();

  const clearFilters = () => {
    router.push(pathname, { scroll: false });
  };

  return (
    <div className={styles.filtersContainer}>
      <CustomButton
        title="Clear Filters"
        customClassName="style1"
        action={clearFilters}
      />
      <CustomFilter title="fuel" />
      <CustomFilter title="year" />
    </div>
  );
}
