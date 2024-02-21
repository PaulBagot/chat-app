<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const { user } = storeToRefs(useUserStore())

</script>

<template>
    <header class="flex items-center justify-between bg-slate-500 p-4">
        <div v-if="user">Username : {{ user.username }}</div>
        <button class="ml-auto">Se Déconnecter</button>
    </header>
</template>