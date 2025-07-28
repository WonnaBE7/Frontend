<template>
    <div class="flex flex-row gap-4">
        <Card :class="color1" class="w-full">
            <component :is="icon1" class="w-8 h-8 mb-2"/>
            <Typography type="B_18_120" class="mb-1">{{content1}}</Typography>
            <Typography type="M_12_120">{{label1}}</Typography>
        </Card>
        <Card :class="color2" class="w-full">
            <component :is="icon2" class="w-8 h-8 mb-2"/>
            <Typography type="B_18_120" class="mb-1 ">{{content2}}</Typography>
            <Typography type="M_12_120">{{label2}}</Typography>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';
import type { Component } from 'vue'

defineProps<{
  color1: string,
  color2: string,
  icon1: Component,
  icon2: Component,
  content1: string,
  content2: string,
  label1: string,
  label2: string
}>()


</script>