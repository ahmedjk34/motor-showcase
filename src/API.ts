import axios from "axios";
import { Car } from "./Types";

const headers = {
  "x-rapidapi-key": "c110a841aemsh730fe467f8b41c9p1fa73cjsn71210b6131cd", //HIDE THE KEY
  "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
};

const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function getCars(): Promise<Car[] | null> {
  try {
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
    const params = { model: "corolla" };
    const response = await axios.get(url, { headers, params });
    const data = response.data;
    return data.length == 0 ? null : data; //if the data list is empty, return it as null
  } catch (error) {
    console.log(error);
    return null;
  }
}
