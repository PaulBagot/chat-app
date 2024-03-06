<script setup>

import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
import { supabase } from '@/supabase'
import router  from '@/router';

const email = ref('')
const password = ref('')

const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
        email : email.value,
        password : password.value
    })

    if(error) {
        alert(error)
    } else {
        router.push({name : 'chat'})
    }
}

</script>

<template>
    <div>
        <form @submit.prevent="login" class="pt-32 flex flex-col gap-2 p-4 max-w-96 mx-auto">
            <label for="email">Email</label>
            <BaseInput v-model="email" type="email" id="email" autocomplete="email" required/>

            <label for="password">Mot de passe</label>
            <BaseInput v-model="password" type="password" id="password" autocomplete="new-password" required/>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5" type="submit">Se Connecter</button>
        </form>
    </div>
</template>