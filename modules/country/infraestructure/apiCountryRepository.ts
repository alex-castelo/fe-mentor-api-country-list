import { Country } from "../domain/Country";
import { CountryRepository } from "../domain/CountryRepository";

const API_BASE_URL = "https://restcountries.com/v3.1";

export function createApiCountryRepository(): CountryRepository {
  return {
    fetchAllCountries,
    fetchCountryByName,
  };
}

async function fetchAllCountries(): Promise<Country[]> {
  const response = await fetch(`${API_BASE_URL}/all`);
  const jsonData = await response.json();

  return jsonData;
}

async function fetchCountryByName(name: string): Promise<Country[]> {
  const response = await fetch(`${API_BASE_URL}/name/${name}`);
  const jsonData = await response.json();

  return jsonData;
}
