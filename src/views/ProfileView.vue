<template>
  <AppHeader />

  <AppFooter />
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
export default defineComponent({
  name: "ProfileView",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>
