<script>
import TitleSkills from "../components/TitleSkills.vue";
import CardSkill from "./CardSkill.vue";

export default {
  name: "SkillsGroup",
  components: { TitleSkills, CardSkill },
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    skills: { type: Array, required: true },
  },
};
</script>

<template>
  <!-- CARD DE GRUPO -->
  <div class="skills-card">
    <div class="skills__header">
      <i :class="icon" class="skills__icon"></i>
      <TitleSkills :name="title" />
    </div>

    <div class="card_info_skills">
      <CardSkill v-for="skill in skills" :key="skill.id" :skill="skill" />
    </div>
  </div>
</template>

<style scoped>
/* Cada grupo es una card */
.skills-card {
  width: 310px;
  background: rgba(9, 2, 26, 0.1); /* blanco semitransparente */
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* efecto vidrio */
  -webkit-backdrop-filter: blur(10px); /* soporte Safari */
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  margin: 0 auto;
}

.skills-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Header */
.skills__header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.skills__icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: var(--color_second);
}

/* Grilla de skills dentro de cada card */
.card_info_skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--m-16);
}

/* Tablet */
@media (min-width: 768px) {
  .card_info_skills {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .card_info_skills {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .card_info_skills {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
