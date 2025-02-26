<script setup lang="ts">

// import { storeToRefs } from 'pinia'
// import { useStore } from "../stores/dashboard";
// const store = useStore();
// const { input, buttonClicked } = storeToRefs(store)

// function bouncePet() {
//     const pet = document.querySelector('.object-contain');
//     pet.classList.add('animate-bounce');
//     setTimeout(() => {
//         pet.classList.remove('animate-bounce');
//     }, 1000);
// }

// if (buttonClicked.value) {
//     bouncePet();
// }

</script>

<template>
        <div class="relative w-full h-auto flex items-center justify-center">
            <div class="w-1/2 md:w-88 h-auto hover:animate-spin">
                <img class="object-contain" src="../public/img/pet-1.png" alt="A little cute white blob of an animal with round ears and a cute face.">
            </div>
        </div>
</template>