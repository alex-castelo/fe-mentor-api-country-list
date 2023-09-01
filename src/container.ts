import { createApiCountryRepository } from "./modules/country/infraestructure/apiCountryRepository";
import { fetchAllCountries } from "./modules/country/application/fetch/fetchAllCountries";

const apiRepo = createApiCountryRepository();

export const handleFetchAllCountries = fetchAllCountries(apiRepo);
