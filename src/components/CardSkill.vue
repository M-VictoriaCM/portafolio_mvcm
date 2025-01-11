<script>
import { ref } from 'vue';
export default {
    name:'CardSkill',
    props: ['skill']
}
</script>
<template>
    <div class="skills__info">
        <div class="skills__info_container">
            <img :src="skill.src" :key="skill.id" class="skills__img">
        </div>
        <p class="name__skills">{{ skill.name }}</p>
    </div>
</template>
<style>
.skills__info{
    display: flex;
    flex-direction: column;    
}

@property --rotate {
    syntax: "<angle>";
    initial-value: 135deg;
    inherits: false;
}

.skills__info_container {
    display: flex;
}

.skills__info_container {
    width: 52px;
    height: 52px;
    background: var(--body_dark);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 3%;
    position: relative;
}

.skills__info_container::before {
    content: "";
    width: 56px;
    height:56px;
    z-index: -1;
    border-radius: inherit;
    background-image: linear-gradient(var(--rotate), rgba(3, 212, 231, 1)0%, rgba(211, 2, 165, 1)100%);
    position: absolute;
    animation: spin 2.5s linear infinite;
}

@keyframes spin {
    0% {
        --rotate: 0deg;
    }

    100% {
        --rotate: 360deg;
    }
}

.skills__img {
    width: 32px;
    height: auto;
}

.name__skills {
    font-size: 0.875rem;
    color: aliceblue;
    margin-top: var(--m-4);
    text-align: center;
}

@media (min-width: 768px) and (max-width: 991px) {
    
    .skills__info_container {        
        width: 100px;
        height: 100px;
    }

    .skills__info_container::before {
        width: 104px;
        height: 104px;
    }

    .skills__img {
        width: var(--m-64);
    }

    .name__skills {
        font-size: var(--m-20);
        margin-top: var(--m-8);
    }
}

@media screen and (min-width: 1024px) {
    .skills__info_container {
        width: 90px;
        height: 90px;
    }

    .skills__info_container::before {
        width: 95px;
        height: 95px;
    }

    .skills__img {
        width: var(--m-44);
    }

    .name__skills {
        font-size: var(--m-20);
        margin-top: var(--m-12);
    }
} 
</style>