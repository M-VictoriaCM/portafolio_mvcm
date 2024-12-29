<script>
export default {
    name:'NavigationItems',
    props: {
    name: { type: String, required: true },
    iconClass: { type: String, required: true },
    link: { type: String, required: true },
  }
}
</script>
<template>
    <li class="nav__item">
      <router-link 
      :to="link" 
      class="nav__link"
      active-class="nav__link--active"
      exact-active-class="nav__link--exact-active"
      >
      
        <i :class="iconClass" class="nav__icon"></i>
        <span class="nav__name">{{ name }}</span>
      </router-link>
    </li>
</template>