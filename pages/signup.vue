<script setup lang="ts">
import { ref } from 'vue';
import ErrorMessage from '~/components/messages/ErrorMessage.vue';
import SucessMessage from '~/components/messages/SucessMessage.vue';

const user = ref<string>("");
const password = ref<string>("");
const confirm_password = ref<string>("");
const msgError = ref<string>("");
const msgSucess =  ref<string>("");

const handleSignup = async () =>{
    if(!user.value){
        msgError.value = "Campo usuario nao pode ficar em branco";
        setTimeout(() => {
            msgError.value = ""
        }, 2000);
        return
    }

    if(!password.value){
        msgError.value = "Campo password não pode ficar em branco.";
        setTimeout(() => {
            msgError.value = "";
        }, 2000);
        return
    }

    if(!confirm_password.value || password.value !== confirm_password.value){
        msgError.value = "As senhas não coincidem";
        setTimeout(() => {
            msgError.value = "";
        }, 2000);
    }

    try {
        const response = await fetch("http://localhost:3001/api/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user: user.value.toLowerCase().trim(),
                password: password.value.trim(),
                confirm_password: confirm_password.value.trim()
            })
        });

        if(response.ok){
            msgSucess.value = "enviado"
            setTimeout(() => {
                msgSucess.value = ""
            }, 2000);
        }
    } catch (error) {
        
    }

}



</script>

<template>
    <main class="w-screen h-screen bg-[url(/assets/img/bg.png)] bg-cover bg-center grid place-items-center">
        <h1 class="text-[36px] font-serif font-bold text-gold uppercase">Cadastre-se</h1>
        <form class="w-[90%] h-[70%] grid items-center justify-items-center md:w-[45%] lg:w-[30%] xl:w-[30%]" @submit.prevent="handleSignup()">
            <label for="user" class="w-[95%] flex flex-col text-center items-center justify-center">
                <span class="text-xl uppercase tracking-wider font-poppins font-medium text-[#f8d759]">Nome de usuario</span>
                <input type="text" placeholder="digite um nome de usuario" id="user" class="w-[100%] h-[40px] border-2 text-center rounded-sm border-[#cd8720] bg-[#daae60] outline-none focus:outline-none" v-model="user">
            </label>
            <label for="password" class="w-[95%] flex flex-col text-center items-center justify-center">
                <span class="text-xl uppercase tracking-wider font-poppins font-medium text-[#f8d759]">Senha</span>
                <input type="password" placeholder="********" id="password" class="w-[100%] h-[40px] border-2 text-center rounded-sm border-[#cd8720] bg-[#daae60] outline-none focus:outline-none" v-model="password">
            </label>
            <label for="confirm_password" class="w-[95%] flex flex-col text-center items-center justify-center">
                <span class="text-xl uppercase tracking-wider font-poppins font-medium text-[#f8d759]">Confirme sua senha</span>
                <input type="password" placeholder="*********" id="confirm_password" class="w-[100%] h-[40px] border-2 text-center rounded-sm border-[#cd8720] bg-[#daae60] outline-none focus:outline-none" v-model="confirm_password">
            </label>
            <button class="w-[70%] h-[50px] border-3 rounded-lg border-[#804706] bg-[#b87617] text-2xl uppercase font-serif tracking-wider text-[#381900]">Cadastrar</button>
        </form>
        <ErrorMessage :msg="msgError" v-if="msgError"/>
        <SucessMessage :msg="msgSucess" v-if="msgSucess" />
    </main>
</template>