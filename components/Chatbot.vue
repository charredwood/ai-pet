<template>
<div class="flex flex-col items-center justify-center w-full h-96 bg-white overflow-y-auto shadow-lg border-1 border-white">
       
    <!-- Chat Messages -->
    <div class="flex flex-col w-full h-5/6 space-y-2 overflow-y-auto p-4">
      <!-- Loop through messages -->
      <div v-for="(message, index) in messages" :key="index" class="w-full">
        <div :class="message.sender === 'You' ? 'text-right' : 'text-left'">
          <span 
            :class="{
              'text-neutral-400': message.sender === 'You',
              'font-bold text-neutral-400': message.sender === 'You',
              'text-black': message.sender === 'Pet',
              'font-bold text-black': message.sender === 'Pet'
            }"
          >
            {{ message.sender }}:
          </span>
          <span :class="{
            'text-neutral-400': message.sender === 'You',
            'text-black': message.sender === 'Pet'
          }">
            {{ message.text }}
          </span>
        </div>
      </div>
    </div>
  
    <div class="flex justify-center w-5/6 space-x-3">
    <el-input
    v-model="userInput" 
    style="width: 100%" 
    placeholder="Talk to me :3"
    @keyup.enter="sendMessage"
    />
    <el-button round @click="sendMessage" color="black">Send</el-button>
  </div>
</div>
</template>

<script>
import axios from "axios";
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

// Vue component (frontend)
async sendMessage() {
  if (!this.userInput.trim()) return; // Don't send empty input

  // Add the user's message to the chat
  this.messages.push({ sender: "You", text: this.userInput });

  try {
    // Send the message to the API endpoint
    const response = await axios.post("api/chat", {
      message: this.userInput // Ensure the message is being sent correctly
    }, {
      headers: {
        'Content-Type': 'application/json' // Ensure the request is JSON
      }
    });

    // Add the AI response to the chat
    this.messages.push({ sender: "Pet", text: response.data.response });

  } catch (error) {
    console.error("Error:", error);
    this.messages.push({ sender: "Pet", text: "Oh, no! Sorry, I don't understand." });
  }

  this.userInput = "";
  
  // Scroll to the bottom of the chat messages after a new message is added
  this.$nextTick(() => {
    const chatContainer = this.$el.querySelector('.flex.flex-col.w-full');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  });
    }
  }
};
  </script>