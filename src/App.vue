<script>
import Header from './components/Header.vue';
export default {
    name:'App',
    components:{Header}
}
</script>

<template>
<div class="grid__container">
    <Header></Header>
    <main class="content">
        <section class="section" id="home">
        <RouterView />
    </section>
    </main>
        
    </div>
</template>

<style scoped>
</style>
