<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar/TheNavbar.vue";
</script>

<template>
  <div class="page">
    <the-navbar />
    <div class="page-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.page {
  color: var(--text-color);
  background: var(--bkg-color);
  min-height: 100vh;
}
.page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
}

@media (min-width: 600px) {
  .page-content {
    margin: 0 auto;
    padding: 1rem 5rem;
  }
}
</style>
