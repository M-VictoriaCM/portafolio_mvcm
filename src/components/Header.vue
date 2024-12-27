<script>
import logo from '../assets/img/logo_sitio_web_victoria.png';
import NavigationItems from './NavigationItems.vue';
import {animateMenu} from '../assets/js/animation.js';
export default {
    name: 'Header',
    components: {
        NavigationItems
    },
    data() {
        return {
            logo,
            navItems: [
                { name: "Home", iconClass: "fa-solid fa-house", link: "/" },
                { name: "Skills", iconClass: "fa-solid fa-book", link: "/" },
                { name: "Contacto", iconClass: "fa-solid fa-paper-plane", link: "/" },
                { name: "Perfil", iconClass: "fa-solid fa-circle-user", link: "/" },
            ],
            isMenuVisible: false
        }
    },
    methods: {
        toggleMenu() {
            animateMenu();
            this.isMenuVisible = !this.isMenuVisible;
        },
    }
}
</script>
<template>
    <header class="header" id="header">
        <nav class="nav container">
            <router-link :to="{name:'Home'}" class="nav_logo">
                <img :src="logo" class="logo" alt="">
                <span class="nav__name_logo">ictoria</span>
            </router-link>
            <div class="bars__menu" @click="toggleMenu">
                <span class="line1__bars-menu"></span>
                <span class="line2__bars-menu"></span>
                <span class="line3__bars-menu"></span>
            </div>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list"
                :class="{ 'container-menu__visible': isMenuVisible }"
                id="nav-menu"
                >
                    <NavigationItems 
                    v-for="item in navItems" 
                    :key="item.name" 
                    :name="item.name"
                    :iconClass="item.iconClass" 
                    :link="item.link" 
                    />
                </ul>
            </div>
            <div>
                <li class="nav__item">
                    <router-link 
                    to="/" 
                    class="nav__link"
                    active-class="nav__link--active" 
                    exact-active-class="nav__link--exact-active"
                    >
                        <i class="fa-solid fa-briefcase nav__icon"></i>
                        <span class="nav__name">Portafolio</span>
                    </router-link>
                </li>
            </div>
            <div>
                <label for="checkbox" class="toggler">
                    <input type="checkbox" id="checkbox">
                    <span class="ball"></span>
                    <i class="fa-solid fa-sun sun"></i>
                    <i class="fa-solid fa-moon moon change-theme" id="theme-button"></i>
                </label>
            </div>
            
        </nav>
    </header>
</template>
<style>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--z-fixed);
    background: var(--header_dark);
    display: flex;
    justify-content: space-between;
    transition: .4s;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 var(--m-24);
}
.nav__menu {
  display: none; /* Ocultar el menú por defecto */
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width:767px) {

    .nav__menu, .container-menu__visible {
        position: fixed;
        bottom: 0;
        left: 0;
        background: var(--header_dark);
        width: 100%;
        height:4rem;
        padding: 0 1rem;
        display: grid;
        align-content: center;
        border-radius: 1.25rem 1.25rem 0 0;
        transition: .4s;
        border-top: 2px solid var(--color_second);
        
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
    transition: transform .5s ease-in-out;
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
@media (min-width: 768px) and (max-width: 991px) {
    .nav_logo{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .nav__name_logo{
        display: block;
        font-size: 20px;
        color: var(--color_font);
        font-weight: 900;
    }
    .nav__name_logo:hover{
        color: var(--color_second);
    }
    .header{
        grid-column: 1/6;
        display:flex;
        flex-direction: column;
    }
    .bars__menu {
            display: block;
    }
    .nav__menu {
            flex-direction: row;
            justify-content: center;
            width: 100%;
        }



}
</style>