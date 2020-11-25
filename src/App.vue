<template>
  <div class="app-wrapper" v-bind:style="{ opacity: opacity }">
    <div class="time-wrapper">
      <Time />
    </div>
    <div class="weather-wrapper">
      <Weather />
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
import { Socket } from "vue-socket.io-extended";
import Weather from "./components/Weather.vue";
import Time from "./components/Time.vue";
import Quote from "./components/Quote.vue";
import Calendar from "./components/Calendar.vue";

@Options({
  components: {
    Weather,
    Time,
    Quote,
    Calendar,
  },
})
export default class App extends Vue {
  opacity = 1;
  @Socket()
  toggleApp(data: any) {
    this.opacity = this.opacity == 0 ? 1: 0;
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

    > div {
      display: flex;
      flex-basis: calc(50% - 60px);
      flex-direction: column;
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

  .quote-wrapper {
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 60px 40px 0;
  }
}
</style>
