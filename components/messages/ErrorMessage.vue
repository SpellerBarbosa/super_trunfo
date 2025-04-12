<script setup lang="ts">

defineProps({
    msg: String
})

</script>

<template>
    <div class="w-[90%] h-[50px] absolute top-2 bg-[url(../../assets/img/msgError.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center xxs:h-[50px] md:w-[60%] lg:w-[50%] lg:h-[50px] lg:bg-cover">
        <span class="text-lg uppercase text-center tracking-wider font-poppins font-bold text-red-900">{{ msg }}</span>
        <p class="w-[100%] h-[6px] bg-red-500 absolute bottom-0 animate-regressive"></p>
    </div>
</template>