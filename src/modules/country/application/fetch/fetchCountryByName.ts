import { Country } from "../../domain/Country";
import { CountryRepository } from "../../domain/CountryRepository";

export async function fetchCountryByName(
  countryRepo: CountryRepository,
  params: { countryName: string }
): Promise<Country> {
  const countries = await countryRepo.fetchCountryByName(params.countryName);

  return countries[0];
}
