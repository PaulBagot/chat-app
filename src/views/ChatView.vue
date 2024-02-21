<script setup>

import { ref } from 'vue';
import ChatMessage from '@/components/ChatMessage.vue'
import AppNavBar from '@/components/AppNavBar.vue';

const messageContent = ref(' ');
const messages = ref([]);

const deleteMessage = (id) => {
    messages.value = messages.value.filter((message) => message.id != id)
}

const addMessage = () => {
    messages.value.push({
        id : Math.random().toString(36).substring(7),
        content : messageContent.value,
        date: new Date().toLocaleDateString(),
        user: {
            name: 'Paul',
            avatar: 'https://france3-regions.francetvinfo.fr/image/8v4_52qCXdVsKnYm2XKhA40ytu0/1200x1200/regions/2020/06/08/5edea8a7629f8_norman.png'
        }
    });
    messageContent.value = '';
}

</script>

<template>
    <AppNavBar/>
    <div class="p-9">
        <div v-for="(message, index) in messages" :key="index" class="mb-5">
            <ChatMessage :message="message" @delete="deleteMessage"/>
        </div>
        <div class="flex p-4">
            <textarea
                v-model="messageContent"
                name="message"
                id="message"
                rows="5"
                class="text-black">
            </textarea>
            <button @click="addMessage" class="rounded-md bg-blue-500 p-1 ml-3">Envoyer</button>
        </div>
    </div>
</template>