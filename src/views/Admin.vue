<script setup>
import { ref } from 'vue';
import { api } from '../plugin/axios';
const token = ref(' ');
const expiresIn =ref(' ');

const access = async()=>{
    try{
        const res= await api.post("users/login",{
            email:"mvittoria7@gmail.com",
            password:"pweaskjdlxkmas2"
        })
        console.log(res.data);
        token.value = res.data.token;
        expiresIn.value = res.data.expiresIn;
        setTime();
    }catch(error){
        console.log(error);
    }
}

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
        setTime();
    } catch (error) {
        console.log(error);
    }
}
refreshToken();
</script>

<template>
    <div class="container">
        <h1>Admin</h1>
        <p>Welcome to the admin page!</p>
        <p>Here you can manage your website content.</p>
        <button type="button" class="btn btn-primary" @click="access">Login</button>
        <div class="col-md-6">
            {{token}} - {{ expiresIn }}
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
}
.col-md-6 { 
    width:280px;
}
</style>