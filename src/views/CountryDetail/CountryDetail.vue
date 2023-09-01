<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import PageLayout from "@/layouts/PageLayout.vue";
import BaseButton from "@/components/BaseButton";
import LoadingSpinner from "@/components/LoadingSpinner";

import { Country } from "@/modules/country/domain/Country";
import { fetchCountryByName } from "@modules/country/application/fetch/fetchCountryByName";
import { createApiCountryRepository } from "@/modules/country/infraestructure/apiCountryRepository";
import { useCountries } from "@/composables/useCountries";

const route = useRoute();
const router = useRouter();
const { getCountryNameByCode, isLoading } = useCountries();
const country = ref<Country | null>(null);
const countryRepo = createApiCountryRepository();

onMounted(async () => {
  await fetchCountry();
});

const routeName = computed(() => {
  return Array.isArray(route.params.name)
    ? route.params.name[0]
    : route.params.name;
});

const goBack = () => {
  router.replace("/");
};

const navigateToBorder = async (countryCode: string) => {
  const country = getCountryNameByCode(countryCode);

  router.push(`/country/${country}`).then(() => {
    fetchCountry();
  });
};

const fetchCountry = async () => {
  isLoading.value = true;
  country.value = await fetchCountryByName(countryRepo, {
    countryName: routeName.value,
  });
  isLoading.value = false;
};
</script>

<template>
  <page-layout>
    <base-button back-btn @click="goBack">Back</base-button>
    <div v-if="country" class="detail-content">
      <img
        class="flag"
        :src="country?.flags?.svg"
        :alt="`${country?.name.common} flag`"
      />
      <div class="content">
        <h2 class="title">{{ country.name.common }}</h2>
        <div class="info-blocks">
          <div class="inflo-block">
            <p><b>Native name:</b> {{ country.name.common }}</p>
            <p><b>Population:</b> {{ country.population }}</p>
            <p><b>Region:</b> {{ country.population }}</p>
          </div>

          <div class="inflo-block">
            <p><b>Top level domain: </b>{{ country.tld[0] }}</p>
            <p>
              <b>Currencies:</b> {{ Object.values(country.currencies)[0].name }}
            </p>
            <p><b>Languages:</b> {{ Object.values(country.languages)[0] }}</p>
          </div>
        </div>
        <div class="borders" v-if="country.borders?.length">
          <p class="block-subtitle"><b>Border Countries:</b></p>
          <div class="borders-block">
            <base-button
              @click="navigateToBorder(border)"
              v-for="border in country.borders"
            >
              {{ getCountryNameByCode(border) }}
            </base-button>
          </div>
        </div>
      </div>
    </div>
    <loading-spinner v-else />
  </page-layout>
</template>

<style scoped>
b {
  font-weight: 600;
}

button {
  padding: 0.5rem 1rem;
  max-width: fit-content;
}
.detail-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  font-size: 1rem;
  margin-top: 1rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.info-blocks {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: left;
}

.inflo-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flag {
  justify-self: center;
  width: 100%;
  height: auto;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  max-height: fit-content;
}

.block-subtitle {
  font-size: 1.15rem;
}

.borders {
  display: flex;
  flex-direction: column;
}

.borders-block {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

@media (min-width: 600px) {
  .detail-content {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }

  .flag {
    justify-self: none;
  }

  .info-blocks {
    flex-direction: row;
  }

  .content {
    grid-template-rows: 32px auto auto;
  }
}
</style>
