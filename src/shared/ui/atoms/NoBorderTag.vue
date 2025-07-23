<template>
    <span 
        :class="['inline-flex items-center px-3 py-1 rounded-full', 
        color]
        "
    >
      <Typography type="B_12_140">
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