<script setup lang="ts">
import CharacterCard from '~/components/CharacterCard.vue';
import Character from '~/model/Character';
import luffyImg from '~/assets/img/luffy.png';

const luffy = new Character(
    'Mokey D. Luffy',
    luffyImg,
    {
        power: 75,
        speed: 69,
        resistence: 82,
        intelligence: 30
    }
)

</script>

<template>
    <main>
        <CharacterCard :character="luffy" />
    </main>
</template>