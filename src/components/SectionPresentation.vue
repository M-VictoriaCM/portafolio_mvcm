<script>
import { initializeTyped } from '../assets/js/config-type.js';
import TitleHome from './TitleHome.vue';
export default {
  name: 'SectionPresentation',
  components: {
    TitleHome,
  },
  data(){
    return{
        saludo:'¡Hola, soy!',
        name:'Victoria',
        typedText: 'Estudiante de Técnicatura Universitaria en Desarrollo de Aplicaciones Informáticas',
    }
  },
  mounted() {
    initializeTyped();
  },
}
</script>
<template>
    <div class="text-box">
       <p class="title" data-aos="fade-right">{{ saludo }}</p>
       <h1 class="text" data-aos="zoom-in-right">{{ name }}</h1>
       <div class="contenedor-texto">
           <h3 class="titulo">
               <span class="typed"></span>
           </h3>
           <div class="" id="cadenas-texto">
               <p class="typed-text">{{ typedText }}</p>
           </div>
       </div>
   </div>

</template>
<style>

.text-box {
    height:250px;
    color: var(--color_primary);
    text-align: left;
    margin-left: var(--m-16);
    margin-top: var(--m-20);
}

.text {
    font-size: 4.5rem;
    line-height: var(--m-72);
    margin: 0.5rem 0;
    font-weight: 800;
    /* Animación del texto*/
    color: transparent;
    /*    -webkit-text-stroke: 1px var(--color_primary);*/
    background: url(../assets/img/background_1.jpg);
    -webkit-background-clip: text;
    background-clip: text;
    background-position : 0 0;
    animation: back 20s linear infinite;
    width: 100%;
}

.typed,
.title {
    font-size: var(--m-24);
}
.typed,
.titulo,
.title {
    font-size: var(--m-24);
}
.typed,
.title,
.typed-text{
    /*Color efecto maquina de escribir */
    color: var(--color_font);
    font-weight: 100;
}
.typed-cursor,
.typed-cursor--blink{
    color: var(--color_primary);
    font-weight:400;
    font-size: var(--m-20);
}


@keyframes back {
    100% {
        background-position: 2000px 0;
    }
}


.text-box,
.titulo {
    font-weight: 600;
}

.titulo {
    width: 20rem;
}

/* Medias queries -----> small */
@media screen and (max-width:320px) {

    .text-box {
        margin-left: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-items: center;
        width: 280px;
    }
    .titulo{
        width: 290px;
    }

    /* .text {
        font-size: 3.9rem;
        line-height: 3.9rem;
        margin: 0;
    } */
    .contenedor-texto {
        width: 290px;
    }

    .typed,
    .title,
    .typed-text{
        /*Color efecto maquina de escribir */
        font-size: var(--m-18);
        font-weight: 100;
    }
    .typed-text{
        /*Color efecto maquina de escribir */
        width: 290px;
    }

}

/*------------ MEDIA QUERIES Medium devise and Large devise------------*/
@media (min-width: 768px) and (max-width: 991px) {

    .text-box {
        width:90%;
        height:300px;
    }

    .titulo,
    .typed,
    .title,
    .typed-text {
        font-size: var(--m-28);
    }
    .text-box{
        margin: 0;
    }

    .titulo {
        font-weight: 400;
    }
    .typed-cursor,
    .typed-cursor--blink{
        font-size: var(--m-32);
        font-weight: 600;
    }

    .text {
        font-size: 7rem;
        line-height: 7rem;
    }

    .titulo {
        width: 100%;
    }

}

@media screen and (min-width: 1024px) {
    .contenedor-texto {
        height: 100px;
    }

    .typed,
    .title,
    .titulo,
    .typed-text{
        font-size: var(--m-28);
    }

    .text-box{
        right: 50px;
        width: 700px;
        height: 300px;
    }
    .typed-cursor,
    .typed-cursor--blink{
        font-size: var(--m-36);
    }

    .text {
        font-size: 8.75rem;
        line-height: 8.75rem;
    }

    .titulo {
        font-weight: 600;
    }

    .titulo {
        width: 100%;
    }
}

</style>