<script setup lang="ts">
import { ref } from 'vue';
import ErrorMessage from '~/components/messages/ErrorMessage.vue';
import SucessMessage from '~/components/messages/SucessMessage.vue';


const user = ref<string>("");
const password = ref<string>("");
const msgError = ref<string>("");
const sucessMessage = ref<string>("");

const handleSubmit = async() =>{
  if(!user.value){
    msgError.value = "Usuario inválido.";
    setTimeout(() => {
      msgError.value = "";
    }, 2000);
    return;
  }

  if(!password.value){
    msgError.value = "Password Inválido.";
    setTimeout(() => {
      msgError.value = "";
    }, 2000);
  }

  try {
    const response = await fetch('http://localhost:3001/api/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        user: user.value.toLowerCase().trim(),
        password: password.value.trim()
      })
    })

    const data = await response.json();

    if(response.ok){
      sucessMessage.value = data.msg;
      setTimeout(() => {
        sucessMessage.value =""
      }, 2000);

      user.value = "";
      password.value ="";
    }else{
      msgError.value = data.msgError;
      setTimeout(() => {
        msgError.value = "";
      }, 2000);
    }
  } catch (error) {
    msgError.value = "Erro ao conectar o servidor, tente novamente mais tarde.";
    setTimeout(() => {
      msgError.value ="";
    }, 2000);
  }
}

</script>

<template>
    <main class="w-screen h-screen bg-[url(/assets/img/bg.png)] bg-cover bg-center bg-no-repeat grid items-center place-items-center">
        <article class="w-[95%] h-[40%] text-center">
          <h1 class="text-5xl font-serif font-bold text-gold uppercase">Super Trunfo</h1>
        </article>
        <form @submit.prevent="handleSubmit()" class="w-[90%] h-[70%] grid items-center justify-items-center md:w-[45%] lg:w-[30%] xl:w-[30%]">
          <label for="email" class="w-[95%] flex flex-col text-center items-center justify-center">
            <span class="text-xl uppercase tracking-wider font-poppins font-medium text-[#f8d759]">Usuario</span>
            <input type="text" placeholder="Digite seu usuario" class="w-[100%] h-[40px] border-2 text-center rounded-sm border-[#cd8720] bg-[#daae60] outline-none focus:outline-none" v-model="user">
          </label>
          <label for="password" class="w-[95%] flex flex-col text-center items-center justify-center">
            <span class="text-xl uppercase tracking-wider font-poppins font-medium text-[#f8d759]">senha</span>
            <input type="password" placeholder="***********" class="w-[100%] h-[40px] border-2 text-center rounded-sm border-[#cd8720] bg-[#daae60] outline-none focus:outline-none" v-model="password">
          </label>
          <button type="submit" class="w-[70%] h-[50px] border-3 rounded-lg border-[#804706] bg-[#b87617] text-2xl uppercase font-serif tracking-wider text-[#381900]">Login</button>
          <span class="uppercase font-serif font-medium tracking-wider text-[#daae60] cursor-pointer"><NuxtLink to="/signup">Registre-se</NuxtLink></span>
        </form>
        <ErrorMessage :msg="msgError" v-if="msgError"/>
        <SucessMessage :msg="sucessMessage" v-if="sucessMessage"/>
    </main>
</template>