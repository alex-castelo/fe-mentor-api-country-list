<script setup lang="ts">
defineProps({
  backBtn: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button class="button">
    <font-awesome v-if="backBtn" icon="fa-solid fa-arrow-left" /><slot />
  </button>
</template>

<style scoped>
button {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  padding: 0.5rem 1rem;
  background-color: var(--element-color);
  color: var(--text-color);
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.button {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.button:hover,
.button:focus {
  outline: 1px solid lightgrey;
}
</style>
