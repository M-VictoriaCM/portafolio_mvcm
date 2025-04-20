<script>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header, RouterView },
};
</script>

<template>
  <div class="grid__container">
    <Header></Header>
    <main class="content">
      <section id="home" class="section">
        <RouterView/>
      </section>
    </main>
  </div>
</template>



<style scoped></style>
