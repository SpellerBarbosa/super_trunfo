<script setup lang="ts">
import { ref } from 'vue';
import CharacterCard from './CharacterCard.vue';
import { watchEffect } from 'vue';
import Character from '~/model/Character';

const characters = ref<Character[]>([])

watchEffect(async()=>{
  try {
    const response  = await fetch('http://localhost:3001/api/deck',{
      method: "GET",
      headers:{
        "Content-Type":"application/json"
      }
    })

    const deck = await response.json();
    console.log(deck.response)
  } catch (error) {
    
  }
})

</script>

<template>
  <div>
    <CharacterCard 
      v-for="(char, index) in characters" 
      :key="index" 
      :character="char" 
    />
  </div>
</template>
