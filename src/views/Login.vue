<script setup>
import {useUserStore} from '../stores/user-store'
const userStore = useUserStore();

</script>

<template>
    <h3>Login {{userStore.token}}</h3>
</template>