<script>
export default {
  name: "CredlyBadge",
  props: {
    badgeId: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 150,
    },
    height: {
      type: [String, Number],
      default: 270,
    },
  },
  computed: {
    embedCode() {
      return `
        <div 
          data-iframe-width="${this.width}"
          data-iframe-height="${this.height}"
          data-share-badge-id="${this.badgeId}"
          data-share-badge-host="https://www.credly.com">
        </div>
      `;
    },
  },
  mounted() {
    // Si el script aún no está cargado, lo agrego
    if (
      !document.querySelector(
        'script[src*="credly.com/assets/utilities/embed.js"]',
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.credlyBadges?.init) {
          window.credlyBadges.init();
        }
      };
    } else {
      // Si ya estaba cargado, re-inicializo
      if (window.credlyBadges?.init) {
        window.credlyBadges.init();
      }
    }
  },
};
</script>
<template>
  <div ref="badgeContainer" v-html="embedCode" class="card_badge"></div>
</template>
<style>
.card_badge {
  width: 100%;
  max-width: 150px;
  border-radius: 10px;
  transition: transform 0.2s;
  background: rgb(255, 255, 255);
}

.card_badge:hover {
  transform: scale(1.05);
}
</style>
