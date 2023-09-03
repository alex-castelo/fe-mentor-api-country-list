<template>
  <div class="select">
    <select name="regions" v-model="value">
      <option value="" disabled selected>Filter by Region</option>
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div class="select_arrow"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RegionOption } from "@/modules/country/domain/CountryRegions";

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const props = defineProps<{
  options: RegionOption[];
  modelValue: string;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit("update:modelValue", newVal);
  },
});
</script>

<style scoped>
.select {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.select select {
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 1rem 1.5rem;
  outline: 0;
  border: 0px solid #000000;
  border-radius: 4px;
  background: var(--element-color);
  color: var(--text-color);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: "Nunito Sans", sans-serif;
}
.select select::-ms-expand {
  display: none;
}

.select select:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.select_arrow {
  position: absolute;
  top: 16px;
  right: 15px;
  width: 0px;
  height: 0px;
  border: solid #7b7b7b;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.select select:hover ~ .select_arrow,
.select select:focus ~ .select_arrow {
  border-color: #000000;
}
.select select:disabled ~ .select_arrow {
  border-top-color: #cccccc;
}
</style>
