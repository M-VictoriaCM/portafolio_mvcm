<script>
export default {
  name: "CardProject",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="card h-100 shadow-lg project-card">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold mb-3">{{ project.title }}</h5>
      <p class="card-text text-description text-muted flex-grow-1 mb-3">
        {{ project.shortDescription }}
      </p>
      <h6 class="fw-bold mt-3">Tecnologías usadas:</h6>
      <div class="d-flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="badge">{{ tech }}</span>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-auto">
        <button class="btn btn-modal" @click="$emit('view-more', project)"> 
        <i class="fa-solid fa-arrow-right icon-next"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  background-color: transparent;
  border: 1px solid var(--color_primary_dark);
}
.icon-next {
  color: var(--color_font);
}
.card-body {
  color: var(--color_font);
}
.card-text {
  color: var(--color_font);
}
.btn-modal {
  background: rgba(255, 255, 255, 0);
  border: 1px solid white;
}
.icon-next:hover {
  color: var(--color_primary);
}
.text-description {
  color: var(--color_font) !important;
}
.bi-arrow-down-right-square:hover {
  color: var(--color_primary);
}
.btn-modal:hover {
  background: transparent;
  border: 1px solid var(--color_primary);
}
.badge {
  background: transparent;
  border: 1px solid var(--color_second);
  color: var(--color_second);
}
</style>