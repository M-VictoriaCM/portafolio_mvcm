<script>
import ButtonDownlod from "../components/ButtonDownlod.vue";
import Avatar from "../components/Avatar.vue";
import DOMPurify from "dompurify";
import CredlyBadge from "../components/CredlyBadge.vue";

export default {
  name: "Profile",
  components: { ButtonDownlod, Avatar, CredlyBadge },
  data() {
    return {
      nombre: "Maria Victoria",
      nick: "M-VictoriaCM",
      rawText1:
        "¡Hola!👋 <br/> Soy Victoria y actualmente estoy finalizando una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas en la Facultad de Ciencias Exactas de la Universidad De Tandil.<br/> Ingresé a este emocionante mundo con un sueño: <em>cambiar la vida de las personas a través de la tecnología.</em>",
      rawText2:
        "Me encantan los desafíos y tengo una pasión por la programación, el desarrollo full stack y el diseño. Cada día, me sumerjo en el fascinante universo de la tecnología con la esperanza de crear soluciones innovadoras y marcar la diferencia en el mundo digital.",
      credlyBadges: [
        "096ad0fa-8328-40c6-8e3f-bf2bb25c398f",
        "7c1f2ef9-1241-4b33-9532-6aae6ae7067c",
        "aff0afd0-72a3-452d-9673-772cb21a5207",
        "057f9081-445b-41bd-9d0c-6264505cc275",
        "356ffc0f-95be-4ef2-8f3b-59e65f6f603c",
        "8c74107b-f432-4cac-b4e0-fe5b0aa79b23",
        "e7f4528e-62a7-43df-9e68-637c99a6e66d",
      ],
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
  <div class="content-profile">
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
      <div class="info_personal">
        <div class="description_profile">
          <span class="text_description">
            <p v-html="text1Sanitized"></p>
            <p v-html="text2Sanitized"></p>
          </span>
        </div>
      </div>
    </div>
    <div class="certificates">
      <h4>Credenciales Certificadas</h4>
      <ul class="badges-grid">
        <li v-for="badgeId in credlyBadges" :key="badgeId" card="card_badge">
          <CredlyBadge :badge-id="badgeId" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.content-profile {
  width: 100%;
  min-height: calc(100% - var(--header));
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container__profile {
  width: 100%;
  min-height: calc(100% - var(--header));
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
}

.container__avatar_profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  padding-top: 0.5rem;
}

.profile__text {
  margin-top: 1rem;
}

.profile__text > h1 {
  color: var(--color_text-title);
  text-align: center;
}

.profile__text > h3 {
  color: var(--color_text-subtitle);
  font-weight: lighter;
  text-align: center;
}

.info_personal {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description_profile {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.text_description {
  margin: 0 1.5rem;
}

.text_description {
  color: var(--color_font);
  text-align: justify;
}

.certificates {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 1rem;
  padding: 0 1.5rem;
}

.certificates > h4 {
  color: var(--color_text-subtitle);
  font-weight: lighter;
  text-align: left;
}

.badges-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 0;
  list-style: none;
  margin: 0 auto;
}

@media screen and (min-width: 1024px) {
  .content-profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - var(--header));
    width: 100%;
  }
  .container__profile {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
  }

  .profile__header {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0rem;
  }
  .certificates {
    padding: 0 2.5rem;
  }
  .certifacates > h4 {
    padding-left: 4rem;
  }
}
</style>
