<script>
import TitleSkills from "../components/TitleSkills.vue";
import CardSkill from "./CardSkill.vue";

export default {
  name: "SkillsGroup",
  components: { TitleSkills, CardSkill },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="skills__header">
    <i :class="icon" class="skills__icon"></i>
    <TitleSkills :name="title" />
  </div>
  <div class="card_info_skills">
    <CardSkill v-for="skill in skills" :key="skill.id" :skill="skill" />
  </div>
</template>
<style>
.card_info_skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--m-20);
  grid-auto-rows: 90px;
  align-self: center;
  margin-top: var(--m-24);
  margin-bottom: var(--m-24);
}

@media (min-width: 768px) and (max-width: 991px) {
  .card_info_skills {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--m-24);
    grid-auto-rows: 150px;
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .card_info_skills {
    width: 50%;
    height: auto;
    display: flex;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--m-16);
    grid-auto-rows: 160px;
    align-items: center;
  }
}
</style>
