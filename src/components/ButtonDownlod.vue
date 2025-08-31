<script>
export default {
  name: "ButtonDownlod",
  methods: {
    abrirCV() {
      window.open(
        "https://drive.google.com/file/d/1V6FtJh8GXJnFAjyo64woDoLCaCsm2MRg/view?usp=sharing",
        "_blank",
      );
    },
  },
};
</script>

<template>
  <button 
    type="button" 
    class="btn btn-success btn-xl btn-rounded"
    @click="abrirCV"
  >
    <div class="container_btn">
      <i class="fa-solid fa-file-pdf icon_btn"></i>
      <span class="text_btn">Ver CV</span>
    </div>
  </button>
</template>
<style>
.container_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem;
}
</style>