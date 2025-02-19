import { Car, SearchFilters } from "./Types";
import carsData from "./carData";

export function getCars(searchFilters: SearchFilters): Car[] | null {
  const { model, fuel, manufacturer, year } = searchFilters;

  const filteredCars = carsData.filter((car) => {
    return (
      (!model || car.model.toLowerCase().includes(model.toLowerCase())) &&
      (!fuel || car.fuel_type.toLowerCase() === fuel.toLowerCase()) &&
      (!manufacturer ||
        car.make.toLowerCase().includes(manufacturer.toLowerCase())) &&
      (!year || car.year === year)
    );
  });
  console.log(filteredCars);

  return filteredCars.length === 0 ? null : filteredCars;
}

export const getCarImageURL = (car: Car, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return url.toString();
};
