<script>
export default {
  name: "ModalProject",
  props: {
    project: { type: Object, required: true },
  },
};
</script>
<template>
  <div class="modal fade show d-block" tabindex="-1" role="dialog">
    <div class="modal-dialog  modal-lg modal-dialog-centered" role="document">
      <div class="modal-content bg-dark text-light">
        <div class="modal-header modal_bg border-0">
          <h5 class="modal-title fw-bold">{{ project.title }}</h5>
          <button
            type="button"
            class="btn_custom_close ms-auto"
            @click="$emit('close')"
          >
          <i class="fa-solid fa-xmark icon_close"></i>
        </button>
        </div>

        <div class="modal-body modal_bg">
          <img
            :src="project.modalImage"
            alt="Imagen proyecto"
            class="img-fluid rounded mb-3"
          />
          <p>{{ project.fullDescription }}</p>
          <h5>✨ Caracteristicas</h5>
          <div class="d-flex flex-wrap gap-2">
            <ul>
              <li
                v-for="caract in project.características"
                :key="caract"
                class="lista"
              >
                {{ caract }}
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer modal_bg border-0">
          <a
            key="demo"
            :href="project.demoUrl"
            target="_blank"
            class="btn btn-success btn-demo"
          >
            Demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="btn btn-outline-light btn-github"
            >GitHub
          </a>
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('close')"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
    <!-- Backdrop clickeable -->
    <div class="fade show" @click="$emit('close')"></div>
  </div>
</template>
<style scoped>
.lista {
  list-style: disc;
}
.btn_custom_close {
  background: var(--color_second);
  border-radius: 30%;
  padding: 0 0.2rem;
  color: var(--color_font);
}

.modal {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}
.modal_bg {
  background: var(--header_dark);
  color: var(--color_font);
  backdrop-filter: blur(10px);          /* difuminado */
  -webkit-backdrop-filter: blur(10px); /* compatibilidad Safari */
  border: 1px solid var(--header_dark);
}
.btn-demo {
  background: var(--color_acent);
}
.btn-github {
  background: var(--color_font);
  color:var(--color_second);
}
.btn-demo {
  background: var(--color_acent);
  border: 1px solid var(--color_acent);
}
</style>
