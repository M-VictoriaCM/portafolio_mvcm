<script>
import logo from "../assets/img/logo_sitio_web_victoria.webp";
import NavigationItems from "./NavigationItems.vue";
import { animateMenu } from "../assets/js/animation.js";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "Header",
  components: {
    NavigationItems, RouterLink, RouterView
  },
  data() {
    return {
      logo,
      nombre: "ictoria",
      opcion: "Portafolio",
      navItems: [
        { name: "Home", iconClass: "fa-solid fa-house", link: "/" },
        { name: "Skills", iconClass: "fa-solid fa-book", link: "/skills" },
        {
          name: "Contacto",
          iconClass: "fa-solid fa-paper-plane",
          link: "/contactme",
        },
        {
          name: "Perfil",
          iconClass: "fa-solid fa-circle-user",
          link: "/profile",
        },
      ],
      isMenuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      animateMenu();
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>

<template>
  <header id="header" class="header">
    <nav class="nav container">
      <RouterLink :to="{ name: 'Home' }" class="nav_logo">
        <img :src="logo" class="logo" alt="" />
        <span class="nav__name_logo">{{ nombre }}</span>
      </RouterLink>
      <div class="bars__menu" @click="toggleMenu">
        <span class="line1__bars-menu"></span>
        <span class="line2__bars-menu"></span>
        <span class="line3__bars-menu"></span>
      </div>
      <div
        class="container-menu"
        :class="{ 'container-menu__visible': isMenuVisible }"
      >
        <div id="nav-menu" class="nav__menu">
          <ul id="nav-menu" class="nav__list">
            <NavigationItems
              v-for="item in navItems"
              :key="item.name"
              :name="item.name"
              :iconClass="item.iconClass"
              :link="item.link"
            />
          </ul>
        </div>
        <div class="nav__list2">
          <li class="nav__item">
            <RouterLink
              to="/portfolio"
              class="nav__link"
              active-class="nav__link--active"
              exact-active-class="nav__link--exact-active"
            >
              <i class="fa-solid fa-briefcase nav__icon"></i>
              <span class="nav__name">{{ opcion }}</span>
            </RouterLink>
          </li>
        </div>
        <div class="container-menu__theme">
          <label for="checkbox" class="toggler">
            <input id="checkbox" type="checkbox" />
            <span class="ball"></span>
            <i class="fa-solid fa-sun sun"></i>
            <i id="theme-button" class="fa-solid fa-moon moon change-theme"></i>
          </label>
        </div>
      </div>
    </nav>
  </header>
  
</template>

<style>
.header,
.nav {
  display: flex;
  justify-content: space-between;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-fixed);
  background: var(--header_dark);
  transition: 0.4s;
  height: var(--header);
  border-bottom: 1px solid var(--color_second);
}

.nav__content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  height: var(--header);
  width: 100%;
  margin: 0 var(--m-24);
}

.logo {
  width: var(--m-32);
  height: var(--m-32);
}

.nav__name_logo {
  display: none;
}

.nav {
  height: var(--header);
  align-items: center;
  margin: 0 var(--m-24);
}

.nav__menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    bottom: 0;
    left: 0;
    background: var(--header_dark);
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    display: grid;
    align-content: center;
    border-radius: 1.25rem 1.25rem 0 0;
    transition: 0.4s;
    border-top: 2px solid var(--color_second);
  }

  .container-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
  }
}

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

#checkbox:checked + .ball {
  transform: translate(29px, -50%);
}

@media (min-width: 768px) and (max-width: 991px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1/6;
  }

  .nav_logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    width: var(--m-40);
    height: var(--m-40);
  }

  .nav__name_logo {
    display: block;
    color: var(--color_font);
    font-size: var(--m-24);
    font-weight: 900;
  }

  .bars__menu {
    display: block;
  }

  .container-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: var(--header);
    background: var(--header_dark);
    width: 50%;
    padding: 20px 0;
    height: calc(100% - var(--header));
    /* overflow-y: auto; */
    left: 100%;
    transition: left 0.5s;
  }
  .nav__list2 {
    width: 80%;
    margin-bottom: 1rem;
  }
  .container-menu__visible {
    left: 50%;
  }

  .nav__menu {
    display: flex;
    width: 100%;
    height: 500px;
  }
}
@media screen and (min-width: 1024px) {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column: 1/12;
    height: 4rem;
    width: 100%;
  }
  .nav_logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav__name_logo {
    display: block;
    color: var(--color_font);
    font-size: var(--m-24);
    font-weight: 900;
  }
  .nav {
    display: flex;
    flex-direction: row;
    height: 4rem;
    margin: 0 var(--m-48);
  }

  .container-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: var(--header);
    width: 800px;
  }
  .nav__menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .nav_img {
    width: 58px;
    height: 58px;
  }
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
