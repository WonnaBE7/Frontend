<template>
    <div class="flex flex-col">
        <Typography type="B_14_120">{{label}}</Typography>
        <Input :label="label"/>
    </div>
</template>

<script setup lang="ts">
import Typography from '../atoms/Typography.vue';
import Input from '../atoms/Input.vue';
defineProps({
    label:{
        type : String,
        required: true
    }
})
</script>