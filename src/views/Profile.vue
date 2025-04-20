<script>
import ButtonDownlod from "../components/ButtonDownlod.vue";
import Avatar from "../components/Avatar.vue";
import DOMPurify from "dompurify";
export default {
  name: "Profile",
  components: { ButtonDownlod, Avatar },
  data() {
    return {
      nombre: "Maria Victoria",
      nick: "M-VictoriaCM",
      rawText1:
        "¡Hola!👋 <br/> Soy Victoria y actualmente estoy finalizando una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas en la Facultad de Ciencias Exactas de la Universidad De Tandil.<br/> Ingresé a este emocionante mundo con un sueño: <em>cambiar la vida de las personas a través de la tecnología.</em>",
      rawText2:
        "Me encantan los desafíos y tengo una pasión por la programación, el desarrollo full stack y el diseño. Cada día, me sumerjo en el fascinante universo de la tecnología con la esperanza de crear soluciones innovadoras y marcar la diferencia en el mundo digital.",
    };
  },
  computed: {
    text1Sanitized() {
      return DOMPurify.sanitize(this.rawText1);
    },
    text2Sanitized() {
      return DOMPurify.sanitize(this.rawText2);
    },
  },
};
</script>
<template>
  <div class="container__profile">
    <div class="container__avatar_profile">
      <div class="profile__header">
        <Avatar />
        <div class="profile__text">
          <h1>{{ nombre }}</h1>
          <h3>{{ nick }}</h3>
        </div>
      </div>
      <div class="profileButton">
        <ButtonDownlod />
      </div>
    </div>
    <div class="description_profile">
      <span class="text_description">
        <p v-html="text1Sanitized"></p>
        <p v-html="text2Sanitized"></p>
      </span>
    </div>
  </div>
</template>
<style>
.container__profile {
  width: 100%;
  min-height: calc(100vh - 80px);
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
  padding-bottom: 10rem;
}

.container__avatar_profile {
  display: flex;
  flex-direction: column;
  width: var(--section__mobile);
  margin-bottom: 1em;
}
.description_profile {
  border: 1px solid green;
  width: 100%;
  display: flex;
  justify-content: center;
}

.text_description {
  width: var(--section__mobile);
  border: 1px solid red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--color_font);
}
.text_description p {
  font-size: var(--size_text_mobile);
  text-align: left;
  word-wrap: break-word;
}
.profile__header {
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid yellow;
  margin-top: 2rem;
}

.profileButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
}

.profile__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  border: 1px solid red;
}

h1,
h3 {
  text-align: left;
}

.profile__text > h1 {
  color: var(--color_font);
  font-size: var(--size_title_mobile);
  font-weight: 800;
}

.profile__text > h3 {
  font-size: var(--size_subtitle_mobile);
  line-height: 1.5rem;
  font-weight: 100;
  color: rgba(251, 251, 254, 0.4);
}

@media (max-width: 768px) {/*para que no se rompa en iphone */
  .container__profile {
    min-height: 100dvh;
  }
}


@media (min-width: 768px) and (max-width: 991px) {
  .container__profile {
    justify-content: center;

  }
  .profile__header {
    justify-content: space-between;
  }
  .container__avatar_profile {
    width: var(--section-tablet);
  }
  .description_profile {
    width: 100%;
  }
  .text_description {
    width: var(--section-tablet);
  }
  .profile__text > h1 {
    font-size: var(--size_title_tablet);
  }

  .profile__text > h3 {
    font-size: var(--size_subtitle_tablet);
  }
}
</style>
