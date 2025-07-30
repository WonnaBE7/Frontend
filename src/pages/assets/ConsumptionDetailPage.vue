<template>
  <AppLayout>
    <template v-if="category && (type === 'current' || type === 'today')">
      <ConsumptionDetailCategory :category="category" :type="type" />
    </template>
    <template v-else-if="type === 'current' || type === 'today'">
      <ConsumptionDetailDate :type="type" />
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppLayout from '@/shared/layout/AppLayout.vue'
import ConsumptionDetailCategory from '@/features/assets/consumption-detail/ui/ConsumptionDetailCategory.vue'
import ConsumptionDetailDate from '@/features/assets/consumption-detail/ui/ConsumptionDetailDate.vue'

const route = useRoute()
const category = computed(() => route.query.category as string || '')
const type = computed(() => route.query.type as 'current' | 'today' | undefined)
</script>