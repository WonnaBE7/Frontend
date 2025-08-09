<template>
    <Button
    @click="handleGoal"
    >
        목표 완료하기
    </Button>
</template>

<script setup lang="ts">
    import Button from '@/shared/ui/atoms/Button.vue';
    import { patchGoalSelection } from '../../goal-simulation-result/service/simulation-result.service';
    import { useRouter } from 'vue-router';
    const props = defineProps<{
        goalId :number
    }>()

    const router = useRouter()

    async function handleGoal (){
        const res = await patchGoalSelection(props.goalId, {status: 'ACHIEVED'})
        if(res.code === 200){
            alert('완료 되었습니다!')
            router.push('/goal')
        }
    }
</script>