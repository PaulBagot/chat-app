<script setup>

import BaseInput from '@/components/baseInput.vue'
import { reactive } from 'vue'

const formValues  = reactive({
    email: '',
    username: '',
    password: ''
})

</script>

<template>
    <div>
        <form method="" class="pt-32 flex flex-col gap-2 p-4 max-w-96 mx-auto">
            <label for="formValues.email">Email</label>
            <BaseInput v-model="email" type="email" id="email" autocomplete="email"/>

            <label for="username">Username</label>
            <BaseInput v-model="formValues.username" type="text" id="username" autocomplete="username"/>

            <label for="password">Mot de passe</label>
            <BaseInput v-model="formValues.password" type="password" id="password" autocomplete="new-password"/>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5" type="submit">Créer un compte</button>
        </form>
    </div>
</template>