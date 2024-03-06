<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

const router = useRouter()

const { user } = storeToRefs(useUserStore())

const logout = async () => {
    await supabase.auth.signOut()

    router.push({ name : 'login'})
}

</script>

<template>
    <header class="flex items-center justify-between bg-slate-500 p-4">
        <div v-if="user">Username : {{ user.username }}</div>
        <button class="ml-auto" @click="logout">Se Déconnecter</button>
    </header>
</template>