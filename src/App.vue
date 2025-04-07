<template>
  <div class="grid__container">
    <Header></Header>
    <main class="content">
      <section id="home" class="section">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style scoped></style>
