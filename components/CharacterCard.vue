<script setup lang="ts">
import Character from '../model/Character'
import logo from '~/assets/img/egito.png'

defineProps<{
  character: Character
}>()
</script>

<template>
  <div class="w-[290px] h-[450px] grid place-items-center">
    <article class="w-[100%] h-[100%] bg-[#EAC27A] shadow-xl grid place-items-center">
      <div class="w-[95%] h-[95%] border-2 rounded-xl flex flex-col items-center bg-[#E1A52E]">
        <!-- Título -->
        <h1 class="bg-[#262215] w-full h-[30px] rounded-t-lg text-center font-bold tracking-wider text-xl uppercase text-[#ECCc90] font-poppins">
          Super Trunfo
        </h1>

        <!-- Logo -->
        <figure class="w-full h-[50px] flex justify-center items-center">
          <img :src="logo" alt="logo one piece" class="w-1/2" />
        </figure>

        <!-- Conteúdo do card -->
        <div class="w-[90%] h-[70%] border rounded-xl p-1 flex flex-col items-center gap-1">
          <!-- Imagem do personagem -->
          <figure class="w-full h-[50%] border-2 rounded-lg overflow-hidden">
            <img :src="character.picture" alt="imagem luffy" class="w-90%" />
          </figure>

          <!-- Nome e atributos -->
          <h2 class="text-lg font-bold mt-1">{{ character.name }}</h2>
          <p class="text-sm font-semibold">Atributos</p>

          <!-- Atributos zebrado por linha -->
          <div class="flex flex-col w-full text-sm">
            <!-- Linha 1 -->
            <div class="grid grid-cols-2 w-full bg-[#f5d186] py-1">
              <div>Poder: {{ character.getAttributes('poder') }}</div>
              <div>Sabedoria: {{ character.getAttributes('sabedoria') }}</div>
            </div>
            <!-- Linha 2 -->
            <div class="grid grid-cols-2 w-full bg-[#eabb59] py-1">
              <div>Influencia: {{ character.getAttributes('influencia') }}</div>
              <div>Imortalidade: {{ character.getAttributes('imortalidade') }}</div>
            </div>
            <div class="grid grid-cols-2 w-full bg-[#eabb59] py-1">
              <div>Cura: {{ character.getAttributes('cura') }}</div>
              <div>Caos: {{ character.getAttributes('caos') }}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
