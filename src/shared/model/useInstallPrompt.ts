import { ref } from 'vue'

export function useInstallPrompt() {
  const deferredPrompt = ref<any>(null)
  const showInstallButton = ref(false)

  const handleBeforeInstallPrompt = (e: Event) => {
    e.preventDefault()
    deferredPrompt.value = e
    showInstallButton.value = true
  }

  const installApp = async () => {
    if (!deferredPrompt.value) return

    deferredPrompt.value.prompt()
    const { outcome } = await deferredPrompt.value.userChoice
    
    if (outcome === 'accepted') {
      console.log('사용자가 앱 설치를 수락했습니다')
    }
    
    deferredPrompt.value = null
    showInstallButton.value = false
  }

  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

  return {
    showInstallButton,
    installApp
  }
}