import { defineStore } from "pinia";
import { api } from "../plugin/axios";

import { ref } from "vue";
import { useUserStore } from "./user-store";


export const useCategoryStore = defineStore("categories", () => {
  const userStore = useUserStore()
  const categories = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
   const isFetching = ref(false); 

  const createCategory = async (categoryData) => { // Cambiado a recibir un objeto
    try {
      isLoading.value = true;
      error.value = null;
      
      // Verificar token primero
      if (!userStore.token) {
        throw new Error("No hay token disponible");
      }

      const res = await api({
        url: "/categories",
        method: "POST",
        headers: {
          Authorization: "Bearer " + userStore.token, // Espacio después de Bearer
          "Content-Type": "application/json",
          setAuthorization: true // Aseguramos que se envíe el token
        },
        data: {
          title: categoryData.title,
          icon: categoryData.icon || "default-icon"
        }
      })
      
      // Asumimos que la respuesta tiene {category: {...}}
      if (res.data.categoryData) {
        categories.value.push(res.data.categoryData);
      }
      
      return res.data; // Retornamos los datos para el componente
      
    } catch (err) {
      error.value = err.response?.data?.error || err.message;
      console.error("Error creating category:", error.value);
      throw err; // Relanzamos el error
    } finally {
      isLoading.value = false;
    }
  };

  const fetchAllCategories = async () => {
    
    try {
      isFetching.value = true;
      error.value =null;

      const res = await api({
        url: "/categories",
        method: "GET",
        headers:userStore.token? {
          Authorization: "Bearer " + userStore.token,
          setAuthorization: true
        }: {}
      });

      if(res.data){
        categories.value = res.data.map(categories =>{
          return {
            title: categories.title,
            icon: categories.icon || "default-icon"
          }
        })
      }
      return categories.value; // Retornamos las categorías obtenidas
    } catch (err) {
      error.value = err.response?.data?.error || err.message;
      console.error("Error listing categories:", error.value);
      throw err; // Relanzamos el error
    } 
  };

  return {
    fetchAllCategories,
    isFetching,
    createCategory,
    isLoading,
    error, 
    categories
  };
});
