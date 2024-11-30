<template>
  <label class="input-wrapper">
    <font-awesome icon="fa-solid fa-magnifying-glass" />
    <input
      placeholder="Search for a country..."
      type="text"
      v-model.trim="value"
    />
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
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
input {
  all: unset;
}

.input-wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
  border: 1px solid red;
  padding: 1rem 1.5rem;
  background-color: var(--element-color);
  color: var(--text-color);
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 100%;
  max-width: 400px;
}

.input-wrapper:hover {
  outline: 1px solid lightgrey;
}

.input-wrapper:focus {
  border-bottom: 2px solid #5b5fc7;
  border-radius: 4px 4px 2px 2px;
}
</style>
