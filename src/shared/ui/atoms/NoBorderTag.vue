<template>
    <span 
        :class="['inline-flex items-center px-4 py-1 rounded-full', 
        color]
        "
    >
      <Typography type="M_12_140" class="whitespace-nowrap">
        <slot />
      </Typography>
    </span>
</template>

<script setup lang="ts">
import Typography from './Typography.vue';

defineProps({
    color : {type : String, required : true}, 
})

</script>