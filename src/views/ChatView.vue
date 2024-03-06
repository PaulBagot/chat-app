<script setup>

import { onMounted, ref, watchEffect } from 'vue';
import ChatMessage from '@/components/ChatMessage.vue'
import AppNavBar from '@/components/AppNavBar.vue';
import { insertMessage, fetchMessages, messages, subscribeToMessage } from '@/api/messages';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const { user } = storeToRefs(useUserStore())

const messageContent = ref(' ');


const deleteMessage = (id) => {
    messages.value = messages.value.filter((message) => message.id != id)
}

const addMessage = () => {
    if(!messageContent.value.trim()) return
    insertMessage(messageContent.value.trim(), user.value.id)
    messageContent.value = ''
}

onMounted(async () => {
    await fetchMessages()
    scrollToBottom()
})

const messageContainer = ref(null)

const scrollToBottom = () => {
    messageContainer.value.scrollHeight
}


watchEffect(() => {
    if(messages.value.length) {
        scrollToBottom()
    }
})

subscribeToMessage()

/*
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
*/



</script>

<template>
    <div class="flex flex-col h-full overflow-hidden">
        <AppNavBar/>
        <div class="p-9 overflow-scroll grow">
            <div v-for="(message, index) in messages" :key="index" class="mb-5">
                <ChatMessage :message="message" @delete="deleteMessage"/>
            </div>
            <div class="flex p-4">
                <textarea
                    v-model="messageContent"
                    @keyup.enter.exact="addMessage"
                    name="message"
                    id="message"
                    rows="5"
                    class="text-black">
                </textarea>
                <button @click="addMessage" class="rounded-md bg-blue-500 p-1 ml-3">Envoyer</button>
            </div>
        </div>
    </div>
</template>