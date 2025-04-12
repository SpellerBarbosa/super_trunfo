<script setup lang="ts">
import CharacterCard from '~/components/CharacterCard.vue';
import Character from '~/model/Character';
import { watchEffect } from 'vue';
import { ref } from 'vue';

let characters = ref<Character[]>([]);

onMounted(()=>{
    watchEffect( async ()=>{
    try {
        const response = await fetch("http://localhost:3001/api/deck",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })

        const data = await response.json()
        const deck = data.response[0].deck;

        characters.value = deck.map((char: any) =>{
            const adapterAttributes = {
                poder: char.atributos.poder,
                sabedoria: char.atributos.sabedoria,
                influencia: char.atributos.influencia,
                caos: char.atributos.caos,
                cura: char.atributos.cura,
                imortalidade: char.atributos.imortalidade
            }
            return new Character(char.nome, char.imagem, adapterAttributes)
        }
    )
        
    } catch (error) {
        console.error(`Erro ao buscar deck ${error}`)
    }
})
})



</script>

<template>
    <main class="w-screen h-screen ">
        <CharacterCard 
        v-for="(char, index) in characters" :key="index"
        :character="char"
        />
    </main>
</template>