import { Country } from "../../domain/Country";
import { CountryRepository } from "../../domain/CountryRepository";

export async function fetchAllCountries(
  countryRepo: CountryRepository
): Promise<Country[]> {
  return await countryRepo.fetchAllCountries();
}
