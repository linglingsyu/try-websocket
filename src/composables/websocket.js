import { useWebsocketStore } from '@/stores/websocket.js'

var socket = null
const wsUrl = import.meta.env.VITE_WEBSOCKET_URL

export const connectSocket = () => {
  const store = useWebsocketStore()

  socket = new WebSocket(wsUrl) // 這邊就是剛剛上面的process.env.VUE_APP_API_URL

  socket.onopen = function () {
    //連線(onopen)
    console.log('websocket connected!!')
  }
  socket.onmessage = function (msg) {
    //監聽訊息(onmessage)
    store.wsRes = JSON.parse(msg.data)
    console.log('onmessage', JSON.parse(msg.data))
  }
  socket.onerror = function (err) {
    //監聽錯誤(onerror)
    console.log('error', err)
  }
}

// 發送訊息
export const sendSocketMessage = (msg) => {
  if (1 === socket.readyState) socket.send(JSON.stringify(msg))
}
