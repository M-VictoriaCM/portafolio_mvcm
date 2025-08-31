<script setup>
import { ref, computed } from 'vue';
import { useCategoryStore } from '../../stores/category-store';

const categoryStore = useCategoryStore();
const form = ref({
  title: '',
  icon: 'fa-solid fa-'
});

const iconPreview = computed(() => {
  return form.value.icon || 'fa-solid fa-question';
});

const submitCategory = async () => {
  try {
    // Validación básica
    if (!form.value.title.trim()) {
      throw new Error('El título es requerido');
    }
    
    if (!form.value.icon.startsWith('fa-')) {
      throw new Error('El icono debe comenzar con "fa-" (ej: fa-solid fa-laptop-code)');
    }

    // Llamar al store
    await categoryStore.createCategory({
      title: form.value.title,
      icon: form.value.icon
    });
    
    // Resetear formulario
    form.value = { 
      title: '', 
      icon: 'fa-solid fa-' 
    };
    
  } catch (error) {
    // El store ya maneja el error, aquí podrías agregar feedback visual adicional
    console.error('Error en el componente:', error);
  }
};
</script>

<template>
  <div class="category-form">
    <h3>Crear Nueva Categoría</h3>
    <form @submit.prevent="submitCategory">
      <div class="form-group">
        <label>Título:</label>
        <input 
          v-model="form.title"
          type="text" 
          placeholder="Ej: Frontend" 
          required
          :disabled="categoryStore.isLoading"
        >
      </div>

      <div class="form-group">
        <label>Icono (Font Awesome):</label>
        <div class="icon-input">
          <input
            v-model="form.icon"
            type="text"
            placeholder="fa-solid fa-laptop-code"
            required
            :disabled="categoryStore.isLoading"
          >
          <i :class="iconPreview" class="icon-preview"></i>
        </div>
        <small class="hint">
          Ejemplos: 
          <span @click="form.icon = 'fa-solid fa-laptop-code'" class="icon-example">fa-solid fa-laptop-code</span>, 
          <span @click="form.icon = 'fa-brands fa-vuejs'" class="icon-example">fa-brands fa-vuejs</span>
        </small>
      </div>

      <div v-if="categoryStore.error" class="error-message">
        {{ categoryStore.error }}
      </div>

      <button 
        type="submit" 
        class="submit-btn"
        :disabled="categoryStore.isLoading"
      >
        <i class="fa-solid fa-plus"></i>
        {{ categoryStore.isLoading ? 'Creando...' : 'Crear Categoría' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.category-form {
  padding: 1.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border 0.3s;
}

input:focus {
  border-color: #42b983;
  outline: none;
}

input:disabled {
  background-color: #f5f5f5;
}

.icon-input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-preview {
  font-size: 1.5rem;
  color: #42b983;
  min-width: 30px;
  text-align: center;
}

.hint {
  display: block;
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.85rem;
}

.icon-example {
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
}

.icon-example:hover {
  color: #3aa876;
}

.error-message {
  color: #e74c3c;
  margin: 1rem 0;
  padding: 0.5rem;
  background: #fdecea;
  border-radius: 4px;
  font-size: 0.9rem;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  background-color: #3aa876;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>