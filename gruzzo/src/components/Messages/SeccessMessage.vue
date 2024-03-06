<template>
    <div class="card" v-if="props.isMessageShow">
      <Message severity="success">Success Message</Message>
    </div>
  </template>
  
  <script setup>
  import Message from "primevue/message";
  import { defineProps } from "vue";
  
  const props = defineProps({
    isMessageShow: {
      type: Boolean,
    },
  });
  

  </script>
  <style scoped>
  .card{
    position: fixed;
    bottom: 50%;
    right: 0;
    width: 400px;

  }
  </style>