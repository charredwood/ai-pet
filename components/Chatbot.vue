<template>
<div class="flex flex-col items-center justify-center w-full h-1/3 bg-red-400 overflow-y-auto">
       
    <!-- Chat Messages -->
    <div class="flex flex-col w-full h-5/6 space-y-2 overflow-y-auto p-4">
      <!-- Loop through messages -->
      <div v-for="(message, index) in messages" :key="index" class="w-full">
        <div :class="message.sender === 'You' ? 'text-right' : 'text-left'">
          <span :class="message.sender === 'You' ? 'font-bold text-blue-500' : 'font-bold text-green-500'">
            {{ message.sender }}:
          </span>
          <span>{{ message.text }}</span>
        </div>
      </div>
    </div>
  
    <div class="flex justify-center w-5/6 space-x-3">
    <el-input
    v-model="userInput" 
    style="width: 100%" 
    placeholder="Start chatting!"
    @keyup.enter="sendMessage"
    />
    <el-button round @click="sendMessage" color="black">Send</el-button>
  </div>
</div>
</template>

  <script>
  import axios from "axios";
  import express from "express";
  import { ElButton } from 'element-plus'

  export default {
   components: { ElButton },

    data() {
      return {
        messages: [],
        userInput: "",
      };
    },
    methods: {
      async sendMessage() {
        if (!this.userInput.trim()) return;
  
        // Add user's message to chat
        this.messages.push({ sender: "You", text: this.userInput });
        try {
          const response = await axios.post("/api/chat", {
            message: this.userInput,
          });

          // Add bot's response to chat
          this.messages.push({ sender: "Bot", text: response.data.response });
        } catch (error) {
          console.error("Error:", error);
          this.messages.push({ sender: "Bot", text: "Sorry, I couldn't respond." });
        }
  
        this.userInput = "";

      // Scroll to the bottom of the chat messages after a new message is added
      this.$nextTick(() => {
        const chatContainer = this.$el.querySelector('.flex.flex-col.w-full');
        chatContainer.scrollTop = chatContainer.scrollHeight;
      });

      },
    },
  };
  </script>