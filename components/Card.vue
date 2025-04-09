<script setup lang="ts">
import Character from '~/model/Character';
import CharacterCard from './CharacterCard.vue';

defineProps<{
    Characters: Character[]
}>()
</script>

<template>
    <div>
        <Character 
        v-for="(char, index) in Characters" 
        :key="index" 
        :character="char" />
    </div>
</template>