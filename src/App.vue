<script setup>
import { onMounted } from 'vue';
import { supabase } from './supabase';
import { useUserStore } from './stores/user';

onMounted(async () => {
 supabase.auth.onAuthStateChange((event, session) => {
  useUserStore().fetchUserProfile(session?.user?.id)
 })
})

</script>

<template>
  <div class="bg-gray-600 h-full text-white">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
