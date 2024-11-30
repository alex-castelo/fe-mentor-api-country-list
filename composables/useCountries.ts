import { ref } from "vue";

import type { Country } from "@/modules/country/domain/Country";
import { handleFetchAllCountries } from "@/container";

const countryList = ref<Country[] | null>(null);
const hasError = ref<boolean>(false);
const isLoading = ref<boolean>(false);

export function useCountries() {
  async function fetchAllCountries() {
    if (!countryList.value?.length) {
      isLoading.value = false;
      hasError.value = false;

      try {
        countryList.value = await handleFetchAllCountries;
        isLoading.value = false;
      } catch {
        isLoading.value = false;
        hasError.value = true;
      }
    }
  }

  function getCountryNameByCode(code: string) {
    const country = countryList.value?.find(
      (country) => country.cioc === code || country.cca3 === code
    );

    return country?.name.common;
  }

  return {
    countryList,
    isLoading,
    hasError,
    fetchAllCountries,
    getCountryNameByCode,
  };
}
