<template>
  <div class="app-wrapper" :style="{ opacity: opacity }">
    <youtube-iframe
      :style="{ opacity: playerOpacity }"
      id="player"
      playerWidth="100%"
      playerHeight="100%"
      @ready="onPlayerReady($event)"
      @ended="onPlayerEnded()"
      @playing="onPlayerPlaying()"
    ></youtube-iframe>
    <div class="top">
      <div class="time-wrapper">
        <Time />
      </div>
      <div class="corona-wrapper">
        <Corona />
      </div>
      <div class="weather-wrapper">
        <Weather />
      </div>
    </div>
    <div class="calendar-wrapper">
      <Calendar />
    </div>
    <div class="quote-wrapper">
      <Quote />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Socket from 'vue-socket.io-extended/decorator';
import Weather from "./components/Weather.vue";
import Time from "./components/Time.vue";
import Quote from "./components/Quote.vue";
import Calendar from "./components/Calendar.vue";
import Corona from "./components/Corona.vue";

declare var YT: any;

@Options({
  components: {
    Weather,
    Time,
    Quote,
    Calendar,
    Corona,
  },
})
export default class App extends Vue {
  opacity = 1;
  playerOpacity = 0;
  player: any;

  onPlayerReady(event: any) {
    this.player = event.target;
  }

  onPlayerEnded() {
    this.playerOpacity = 0;
  }

  onPlayerPlaying() {
    this.playerOpacity = 1;
  }

  @Socket()
  toggleApp(data: any) {
    this.opacity = this.opacity == 0 ? 1 : 0;
    this.player.pauseVideo();
  }

  @Socket()
  startVideo(data: any) {
    this.player.loadVideoById(data);
    this.player.playVideo();
  }

  @Socket()
  continueVideo(data: any) {
    this.player.playVideo();
    this.playerOpacity = 1;
  }

  @Socket()
  pauseVideo(data: any) {
    this.player.pauseVideo();
    this.playerOpacity = 0;
  }

  @Socket()
  videoVolume(data: any) {
    this.player.setVolume(data);
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;

  .app-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: inherit;
    width: inherit;
    transition: 500ms all;

    > div:not(#player, .top) {
      display: flex;
      flex-basis: calc(50% - 60px);
      flex-direction: column;
    }

    #player {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .top {
      flex-basis: 100%;
      flex-direction: row;

      > div:not(#player, .top) {
        display: flex;
        flex-basis: calc(50% - 60px);
        flex-direction: column;
      }
    }
  }

  .time-wrapper {
    padding: 40px 0 0 60px;
  }

  .weather-wrapper {
    padding: 40px 60px 0 0;
    align-items: flex-end;
  }

  .calendar-wrapper {
    align-items: flex-start;
    justify-content: center;
  }

  .corona-wrapper {
    padding-top: 40px;
    align-items: flex-end;
  }

  .quote-wrapper {
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 60px 40px 0;
  }
}
</style>
