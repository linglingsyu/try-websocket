import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWebsocketStore = defineStore('websocket', () => {
  const wsRes = ref({})
  return { wsRes }
})
