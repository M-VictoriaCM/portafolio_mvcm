import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "../plugin/axios";

export const useUserStore = defineStore("user", () =>{
    const token = ref(null);
    const expiresIn = ref(null);

    const access = async(email, password)=>{
        try{
            const res= await api.post("users/login",{
                email:email,
                password:password
            })
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            sessionStorage.setItem("user", "true");
            setTime();
            return res.data;
        }catch(error){
            throw error;
        }
    };

    // user-store.js
const register = async ({ name, email, password, repassword}) => {
  
  console.log("Recibido en store register:", { name,email,password, repassword  });  
    if (password.trim() !== repassword.trim()) {
     
      throw new Error("Las contraseñas son diferentes");
    }
  try {
    const res = await api.post("users/register", {
        name,
        email,
        password,
        repassword
      });
    console.log("Respuesta del servidor:", res.data);

    if (!res.data.token) {
      throw new Error("Error en el registro: no se recibió token");
    }

    token.value = res.data.token;
    expiresIn.value = res.data.expiresIn;
    sessionStorage.setItem("user", "true");
    setTime();
    return res.data;

  } catch (error) {
    console.error("Error en store register:", error);
    if (error.response) {
      // Mejora el manejo de errores para mostrar mensajes del backend
      if (error.response.data && error.response.data.errors) {
        throw error.response.data.errors[0].msg;
      }
      throw error.response.data.message || "Error en el registro";
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw error.message;
    }
  }
};


    
    const setTime = () => {
        setTimeout(()=>{
            refreshToken()},
            expiresIn.value * 1000 -6000
        )
    }
    const refreshToken =async()=>{
        try {
            const res =await api.get('/users/refresh')
            console.log(res.data);
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            sessionStorage.setItem("user", "true");
            setTime();
        } catch (error) {
            console.log(error);
            sessionStorage.removeItem("user");
        }
    }

    const logout = async()=>{
        try {
            await api.get('/users/logout');
        } catch (error) {
            console.log(error);
        }finally{
            reset();
            sessionStorage.removeItem("user");
        }
    }

    const reset = () =>{
        token.value = null;
        expiresIn.value = null;
    }
    return{
        token, 
        expiresIn,
        access,
        refreshToken,
        logout,
        register,
    };
});

