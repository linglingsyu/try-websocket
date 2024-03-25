<script setup>
import { computed } from 'vue'
import { useWebsocketStore } from '@/stores/websocket.js'
import { connectSocket, sendSocketMessage } from '@/composables/websocket.js'

connectSocket()

const store = useWebsocketStore()
const wsRes = computed(() => store.wsRes)

const onSubmit = () => {
  sendSocketMessage({
    msg: 'some message to websocket server'
  })
}
</script>

<template>
  {{ wsRes }}

  <button @click="onSubmit">send message</button>
</template>
