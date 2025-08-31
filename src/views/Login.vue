<script setup>
import { useUserStore } from '../stores/user-store';
import { ref } from 'vue';
import { showErrorAlert } from '../utils/alerts';
import {useRouter} from 'vue-router';

const userStore = useUserStore();
const router = useRouter ();
const email = ref('mvittoria7@gmail.com');
const password = ref('pweaskjdlxkmas2');
const errors = ref({
  email: '',
  password: ''
});

const validateEmail = () => {
  if (!email.value) {
    errors.value.email = 'El email es obligatorio';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Email no válido';
  } else {
    errors.value.email = '';
  }
};

const validatePassword = () => {
  if (!password.value) {
    errors.value.password = 'La contraseña es obligatoria';
  } else if (password.value.length < 6) {
    errors.value.password = 'Mínimo 6 caracteres';
  } else {
    errors.value.password = '';
  }
};

const handleSubmit = async () => {
  try {
    validateEmail();
    validatePassword();

    if (errors.value.email || errors.value.password) {
      console.log("Errores de validación", errors.value);
      return;
    }
    console.log("Pasó la validación");
    const useData = await userStore.access(email.value, password.value);
    
    if(useData){
      console.log("Acceso exitoso", useData);
      await router.push('/admin');
      email.value = '';
      password.value = '';
    }
  } catch (error) {
    console.error("Error completo:", error,
    );
    const errorMessage = error?.response?.data?.error || error?.message || 'Error desconocido';
    await showErrorAlert(errorMessage);
  }
};
</script>

<template>
  <div class="container_login ">
      <div class="formulario">
        <h1>Login</h1>
        <p>Welcome to the login page!</p>
        <p>Please enter your credentials to access the admin page.</p>
        <form action="" @submit.prevent="handleSubmit">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" @blur="validateEmail" class="form-control" required>
          <span v-if="errors.email" class="error">{{ errors.email }}</span>

          <label for="password">Password:</label>
          <input type="password" v-model="password" @blur="validatePassword" id="password" class="form-control"
            required>
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
          <div class="form-group mt-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
  </div>
</template>
<style>
.container_login{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  color: white;
  width: 100%;
  ;
}

.formulario {
  width: 280px;
  color: white;
  text-align: center;
}

.error {
  color: red;
  font-size: 0.8rem;
  display: block;
  margin-top: 0.2rem;
}
</style>