<script lang="ts" setup>

  "use client";
  import Header from "./components/header.vue";
  import Character from "./components/character.vue";
  import Chatbot from "./components/Chatbot.vue";
</script>

<template>
    <main>
    <div
    class="h-screen" style="background: radial-gradient(circle, rgba(251,231,255, 1) 0%, rgba(255,255,255,1) 64%);">
      <Header />
      <Character />
      <Chatbot />
    </div>
    </main>
</template>