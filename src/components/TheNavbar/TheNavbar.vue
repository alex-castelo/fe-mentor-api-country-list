<script setup lang="ts">
import { computed, ref } from "vue";

const mode = ref<"dark-theme" | "light-theme">("dark-theme");

const switchColorMode = () => {
  toggleColorMode();
  document.body.classList.toggle("dark-theme");
};

const toggleColorMode = () => {
  return mode.value === "dark-theme"
    ? (mode.value = "light-theme")
    : (mode.value = "dark-theme");
};

const isDarkMode = computed(() => {
  return mode.value === "dark-theme";
});

const navbarContent = computed(() => {
  return isDarkMode.value
    ? {
        text: "Dark Mode",
        icon: "fa-moon",
      }
    : {
        text: "Light Mode",
        icon: "fa-sun",
      };
});
</script>

<template>
  <nav class="navbar">
    <span class="title"><b>Where in the world?</b></span>
    <button class="navbar-button" @click="switchColorMode">
      <font-awesome-icon :icon="navbarContent.icon" />
      <span v-text="navbarContent.text" />
    </button>
  </nav>
</template>

<style scoped>
button {
  color: var(--text-color);
}

.title {
  font-size: 1.25rem;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 48px;
  font-size: var(--font-size-small);
  font-weight: bold;
  -webkit-box-shadow: 0px 1px 0px 0px gray;
  -moz-box-shadow: 0px 1px 0px 0px gray;
  box-shadow: 0px 1px 0px 0px gray;
}

.navbar-button {
  border: none;
  background-color: transparent;
  display: flex;
  gap: 0.5rem;
}
</style>
