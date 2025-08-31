<script setup>
import { useUserStore } from '../stores/user-store';
import { useCategoryStore } from '../stores/category-store';
import { useRouter } from 'vue-router';
import CreateCategoryForm from '../components/CRUD/CreateCategoryForm.vue';
const userStore = useUserStore();
const router = useRouter();

const logout = () => {
    router.push('/login');
    console.log("Cerrando sesión");
    alert("Sesión cerrada exitosamente");
    userStore.logout();
};
const access = () => {
    userStore.access();
}
const categoryStore = useCategoryStore();
categoryStore.fetchAllCategories();

</script>

<template>
    <div class="container">
        <h1>Página de Pruebas</h1>

        <button type="button" class="btn btn-primary" @click="access()" v-if="!userStore.token">Login </button>

        <button type="button" class="btn btn-primary" @click="logout()" v-if="userStore.token">Cerrar Sesion
        </button>

        <router-link to="/protected" class="btn btn-primary" v-if="userStore.token" @click="userStore.protected">
            Protected
        </router-link>

        <CreateCategoryForm v-if="userStore.token"/>
       
        {{ categoryStore.categories }}
       
    </div>
</template>

<style scoped>
.container {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.debug-info {
    margin-top: 2rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 4px;
}

.btn {
    padding: 0.5rem 1rem;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn:disabled {
    background: #cccccc;
    cursor: not-allowed;
}
</style>