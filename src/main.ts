import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import $socket from './socket-instance';

createApp(App)
.use(VueSocketIOExt, $socket)
.mount('#app');