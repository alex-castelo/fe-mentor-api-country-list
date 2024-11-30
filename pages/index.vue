<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { REGION_OPTIONS } from "@/modules/country/domain/CountryRegions";
import { useCountries } from "@/composables/useCountries";
import type { Country } from "@/modules/country/domain/Country";

const filter = ref("");
const regionFilter = ref("");

const countriesComposable = useCountries();
const router = useRouter();

const { data: countryList } = await useAsyncData("countries", async () => {
  await countriesComposable.fetchAllCountries();
  return countriesComposable.countryList.value;
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
  <div class="search-fields">
    <base-input v-model="filter" />
    <base-select :options="REGION_OPTIONS" v-model="regionFilter" />
  </div>
  <Transition v-if="countryList?.length">
    <div class="countries">
      <nuxt-link
        v-for="(country, i) in filteredCountries"
        :to="`/country/${country.name.common}`"
      >
        <country-card :country="country" :isLazy="i > 10" />
      </nuxt-link>
    </div>
  </Transition>
  <loading-spinner v-else />
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
