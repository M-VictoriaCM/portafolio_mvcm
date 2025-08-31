<script>
export default {
  name: "ThemeToggle",
   data() {
    return {
      isLight: false,
    };
  },
  mounted() {
    // Verificar si ya había un tema guardado
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      this.isLight = true;
      document.body.classList.add("light-theme");
    }
  },
  methods: {
    toggleTheme() {
      if (this.isLight) {
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
        console.log("claro");
      } else {
        document.body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
        console.log("oscuro");
      }
    },
  },
};
</script>
<template>
  <div class="container-menu__theme">
    <label for="checkbox" class="toggler">
      <input
        id="checkbox"
        type="checkbox"
        v-model="isLight"
        @change="toggleTheme"
      />
      <span class="ball"></span>
      <i class="fa-solid fa-sun sun"></i>
      <i id="theme-button" class="fa-solid fa-moon moon change-theme"></i>
    </label>
  </div>
</template>
<style>
#checkbox {
  display: none;
}

.toggler {
  display: block;
  width: var(--m-64);
  height: var(--m-32);
  border: 2px solid var(--color_second);
  border-radius: 1.5625rem;
  position: relative;
  cursor: pointer;
}

.ball,
.sun,
.moon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.ball {
    display: inline-block;
    width: var(--m-24);
    height: var(--m-24);
    background-color: var(--color_primary);
    border-radius: 50%;
    left: var(--m-4);
    z-index: 10;
    transition: transform 0.5s ease-in-out;
}

.sun,
.moon {
    font-size: var(--m-16);
    color: var(--color_primary_light);
}

.sun {
    left: 0.3125rem;
}

.moon {
    right: 0.3125rem;
}

#checkbox:checked+.ball {
    transform: translate(29px, -50%);
}

@media screen and (min-width: 1024px) {
    .container-menu__theme {
        height: var(--header);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
    }

    .toggler {
        width: 4rem;
        height: 2rem;
        align-content: center;
    }

    .ball {
        width: 1.6rem;
        height: 1.6rem;
    }

    .bars__menu {
        display: none;
    }
}
</style>