import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import $socket from './socket-instance';
import VueYouTubeIframe from '@techassi/vue-youtube-iframe';

createApp(App)
.use(VueSocketIOExt, $socket)
.use(VueYouTubeIframe)
.mount('#app');