<template>
  /* From Uiverse.io by barisdogansutcu */
  <button
    class="download-button"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <div class="docs">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        ></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
      Cv
    </div>
    <div class="download">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    </div>
  </button>
</template>
<script>
export default {
  name: "ButtonDownlod",
  data() {
    return {
      isPressed: false,
    };
  },
  methods: {
    handleTouchStart() {
      this.isPressed = true;
    },
    handleTouchEnd() {
      this.isPressed = false;
    },
    handleMouseDown() {
      this.isPressed = true;
    },
    handleMouseUp() {
      this.isPressed = false;
    },
  },
};
</script>

<style>
/* From Uiverse.io by barisdogansutcu */
.download-button {
  position: relative;
  border-width: 0;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1;
  width: 200px;
  border-radius: 10px;
}

.download-button .docs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 40px;
  padding: 0 10px;
  border-radius: 4px;
  z-index: 1;
  background-color: #242a35;
  border: solid 1px #e8e8e82d;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.download-button:hover {
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.download {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  z-index: -1;
  border-radius: 4px;
  transform: translateY(0%);
  background-color: #01e056;
  border: solid 1px #01e0572d;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.download-button:hover .download {
  transform: translateY(100%);
}

.download svg polyline,
.download svg line {
  animation: docs 1s infinite;
}

@keyframes docs {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>
