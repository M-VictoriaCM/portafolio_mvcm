<script>
import SectionSocial from '../components/SectionSocial.vue';
import SectionPresentation from '../components/SectionPresentation.vue';
export default {
    name: 'Home',
    components:{
        SectionSocial,
        SectionPresentation
    }
}
</script>
<template>
    <div class="container__home">
        <SectionSocial/>
        <SectionPresentation/>
    </div>
</template>
<style>
.container__home{
    width:100%;
    height: calc(100vh - 8rem);
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
@media screen and (min-width: 1024px) {
    .container__home{
        border:1px solid white;
        height:calc(100vh - 4rem);
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
</style>