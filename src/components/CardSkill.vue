<script>
import { ref } from "vue";
export default {
  name: "CardSkill",
  props: ["skill"],
};
</script>
<template>
  <div class="skills__info">
    <div class="skills__info_container">
      <img :key="skill.id" :src="skill.src" class="skills__img" />
    </div>
    <p class="name__skills">{{ skill.name }}</p>
  </div>
</template>
<style>
.skills__info {
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
  background: #161a2e;
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
  height: 56px;
  z-index: -1;
  border-radius: inherit;
  background-image: linear-gradient(
    var(--rotate),
    rgba(3, 212, 231, 1) 0%,
    rgba(211, 2, 165, 1) 100%
  );
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
  color: var(--color_font);
  margin-top: var(--m-4);
  text-align: center;
}

</style>
