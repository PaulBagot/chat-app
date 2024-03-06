<script setup>

import { TrashIcon } from '@heroicons/vue/24/outline'

defineProps({
    message: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['delete'])

</script>

<template>
    <div class="flex items-center">
        <img :src="message.user.avatar_url" alt="user avatar" class="rounded-full h-9 w-9 mr-3">
        <div>{{ message.user.username }}</div>
        <div class="ml-2 text-xs opacity-50">{{ message.date }}</div>
        <button @click="emit('delete', message.id)" class="ml-3"><TrashIcon class="h-5 w-5" /></button>
    </div>
    {{ message.content }}
</template>