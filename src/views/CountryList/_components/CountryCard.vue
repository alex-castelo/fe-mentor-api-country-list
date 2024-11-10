<script setup lang="ts">
import { computed } from "vue";
import { Country } from "@/modules/country/domain/Country";

type CountryCardFields = Pick<
  Country,
  "name" | "population" | "region" | "capital" | "flags"
>;

const props = defineProps<{
  country: CountryCardFields;
  isLazy?: boolean;
}>();

const capital = computed(() => {
  return Array.isArray(props.country.capital)
    ? props.country.capital[0]
    : props.country.capital;
});

const formattedPopulation = computed(() => {
  return props.country.population.toLocaleString();
});
</script>

<template>
  <div class="card" data-testid="country-card">
    <img
      :loading="isLazy ? 'lazy' : 'eager'"
      class="flag"
      :src="country.flags.svg"
      :alt="`${country.name.common} flag`"
    />
    <div class="content">
      <p class="name">{{ country.name.common }}</p>
      <ul>
        <li>
          <span class="label">Population: </span>{{ formattedPopulation }}
        </li>
        <li><span class="label">Region: </span>{{ country.region }}</li>
        <li v-if="capital?.length">
          <span class="label">Capital: </span>{{ capital }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 10px 9px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--element-color);
}

.card:hover {
  transform: scale(1.05);
}

.flag {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.content {
  padding: 2rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: (--font-size-small);
}
.name {
  font-size: 1.25rem;
  font-weight: 700;
}

.label {
  font-weight: 600;
}

li:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
