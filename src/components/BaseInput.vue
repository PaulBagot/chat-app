<script setup>

defineProps({
    modelValue: {
        type : String,
        default: ''
    }
})

</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" 
        v-bind="$attrs"
        class="p-2 rounded-md bg-slate-500"
    >
</template>