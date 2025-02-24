import { Car, SearchFilters } from "./Types";
import carsData from "./carData";

// Filters the list of cars based on the provided search filters.
// @param searchFilters - An object containing the search criteria.
// @returns An array of cars that match the search criteria or null if no cars match.
export function getCars(searchFilters: SearchFilters): Car[] | null {
  const { model, fuel, manufacturer, year } = searchFilters;
  const filteredCars = carsData.filter((car) => {
    return (
      (!model || car.model.toLowerCase().includes(model.toLowerCase())) &&
      (!fuel || car.fuel_type.toLowerCase() === fuel.toLowerCase()) &&
      (!manufacturer ||
        car.make.toLowerCase().includes(manufacturer.toLowerCase())) &&
      (!year || car.year === Number(year))
    );
  });
  return filteredCars.length === 0 ? null : filteredCars;
}

// Generates a URL for fetching the image of a car.
// @param car - The car object for which the image URL is to be generated.
// @param angle - Optional parameter to specify the angle of the car image.
// @returns A string representing the URL to fetch the car image.
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
