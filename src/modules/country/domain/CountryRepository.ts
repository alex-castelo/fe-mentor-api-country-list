import { Country } from "./Country";

export interface CountryRepository {
  fetchAllCountries: () => Promise<Country[]>;
  fetchCountryByName: (name: string) => Promise<Country[]>;
}
