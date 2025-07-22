import { ref, onMounted, onUnmounted, computed, readonly } from 'vue'

export function useNetworkStatus() {
  const isOnline = ref(navigator.onLine)
  const isOffline = computed(() => !isOnline.value)

  const updateNetworkStatus = () => {
    isOnline.value = navigator.onLine
  }

  onMounted(() => {
    window.addEventListener('online', updateNetworkStatus)
    window.addEventListener('offline', updateNetworkStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('online', updateNetworkStatus)
    window.removeEventListener('offline', updateNetworkStatus)
  })

  return {
    isOnline: readonly(isOnline),
    isOffline: readonly(isOffline)
  }
}