<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { REGION_OPTIONS } from "@modules/country/domain/CountryRegions";
import { useCountries } from "@/composables/useCountries";
import { Country } from "@modules/country/domain/Country";

import CountryCard from "./_components/CountryCard.vue";
import BaseInput from "@/components/BaseInput/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect/BaseSelect.vue";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.vue";
import PageLayout from "@/layouts/PageLayout.vue";

const countryList = ref<null | Country[]>(null);
const filter = ref("");
const regionFilter = ref("");

const countriesComposable = useCountries();
const router = useRouter();

onMounted(async () => {
  await countriesComposable.fetchAllCountries();
  countryList.value = countriesComposable.countryList.value;
});

const filteredCountries = computed(() => {
  const filtered = countryList.value?.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(filter.value.toLowerCase());
    const matchesRegionFilter =
      regionFilter.value !== ""
        ? country.region.toLowerCase() === regionFilter.value
        : true;
    return matchesSearch && matchesRegionFilter;
  });
  return filtered;
});

const navigateTo = (countryName: Country["name"]["common"]) => {
  router.push(`/country/${countryName}`);
};
</script>

<template>
  <page-layout>
    <div class="search-fields">
      <base-input v-model="filter" />
      <base-select :options="REGION_OPTIONS" v-model="regionFilter" />
    </div>
    <Transition v-if="countryList?.length">
      <div class="countries">
        <country-card
          v-for="country in filteredCountries"
          :country="country"
          @click="navigateTo(country.name.common)"
        />
      </div>
    </Transition>
    <loading-spinner v-else />
  </page-layout>
</template>

<style scoped>
.countries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem 2rem;
  justify-items: center;
}

.search-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}
</style>
