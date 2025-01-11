<script>
export default {
    name: 'TitleSkills',
    props: {
        name: String,
    }
}
</script>
<template>
    <h1 class="skills__title">{{ name }}</h1>
</template>
<style>
.skills__title {
    font-size: var(--m-36);
    color: var(--color_font);
    font-weight: 800;
    text-align: center;
}

@media (min-width: 768px) and (max-width: 991px) {
    .skills__title {
        font-size: var(--m-48);
    }
}

@media screen and (min-width: 1024px) {

    .skills__title {
        font-size: var(--m-64);

    }

    .skills__title {
        position: relative;
    }

    .skills__title::before {
        transform: scaleX(0);
        transform-origin: bottom right;
    }

    .skills__title:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;

    }

    .skills__title:hover {
        color: var(--body_dark);
        cursor: pointer;
    }

    .skills__title::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: 0 0 0 0;
        background: var(--color_second);
        z-index: -1;
        transition: transform .3s ease;
    }
}
</style>