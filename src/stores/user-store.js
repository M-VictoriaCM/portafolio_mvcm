import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () =>{
    const token = ref("tokenGlobal");
    const expiresIn = ref("");

    return{
        token, 
        expiresIn,
    };
});