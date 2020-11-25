<template>
  <div class="time">
    <p class="current-time">{{ timestamp }}</p>
    <p class="date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Time extends Vue {
    timestamp: string = '';
    date: string = '';

    private days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    private months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    created() {
        this.getDate();
        this.getTime();
        setInterval(this.getTime, 1000);
        setInterval(this.getDate, 60000);
    }

    public getTime() {
        const today = new Date();
        const time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + ":" + (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        this.timestamp = time;
    }

    public getDate() {
        const today = new Date();
        const date = this.days[today.getDay()] + ' ' + today.getDate() + ' ' + this.months[today.getMonth()] + ' ' + today.getFullYear();
        this.date = date; 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.time {
    .current-time {
        font-size: 100px;
    }

    .date {
        font-size: 40px;
    }
}
</style>
