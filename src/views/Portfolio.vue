<script>
import CardProject from "../components/CardProject.vue";
import ModalProject from "../components/ModalProject.vue";
import projects from "../assets/js/projects.json";
import TitleSkills from "../components/TitleSkills.vue";

export default {
  name: "Portafolio",
  components: { CardProject, ModalProject, TitleSkills },
  data() {
    return {
      projects,
      selectedProject: null,
      title: "Mi Portafolio",
      subtitle: "Explora mis proyectos y experiencias de desarrollo",
    };
  },
  methods: {
    openPopup(project) {
      this.selectedProject = project;
    },
    closePopup() {
      this.selectedProject = null;
    },
  },
};
</script>

<template>
  <div class="container-fluid text-light min-vh-100 py-5">
    <div class="text-center mb-5">
      <h1 class="display-4 portafolioTitle">{{ title }}</h1>
      <p class="lead portafolioSubtitle">{{ subtitle }}</p>
    </div>

    <div class="row g-4 justify-content-center">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="col-12 col-md-6 col-lg-4">
        <CardProject :project="project" @view-more="openPopup" />
      </div>
    </div>

    <ModalProject 
      v-if="selectedProject" 
      :project="selectedProject" 
      @close="closePopup" 
    />
  </div>
</template>
<style>
.portafolioTitle,
.portafolioSubtitle {
  text-align: center;
}
.portafolioTitle {
  font-size: var(--m-36);
  color: var(--color_text-title);
  font-weight: 800;
}
.portafolioSubtitle {
  font-size: var(--m-18);
  font-weight: 400;
  color: var(--color_text-subtitle);
}

@media (min-width: 768px) and (max-width: 991px) {
  .portafolioTitle {
    font-size: var(--m-48);
  }
}

@media screen and (min-width: 1024px) {
  .portafolioTitle {
    font-size: var(--m-64);
  }
}
</style>