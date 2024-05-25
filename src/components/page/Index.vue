<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items" />
  </div>
  <div>Ini Page</div>
</template>
