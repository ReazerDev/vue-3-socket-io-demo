<template>
  <div class="calendar">
    <p class="headline">Todays Agenda</p>
    <div class="calendar-items">
        <CalendarItem v-for="event in calendarEvents" :key="event.summary" :event="event" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { CalendarEvent } from '../models/CalendarEvent';
import CalendarItem from './CalendarItem.vue';

@Options({
  components: {
    CalendarItem,
  },
})
export default class Calendar extends Vue {
    calendarEvents: CalendarEvent[] = [];
    
    created() {
        this.getCalendarEvents();

        setInterval(this.getCalendarEvents, 60000);
    }

    public getCalendarEvents() {
        fetch(process.env.VUE_APP_API_URL + '/calendar').then(res => res.json()).then(data => {
            this.calendarEvents = [];
            this.calendarEvents = CalendarEvent.collection(data)
		});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calendar {
    width: 70%;

    .headline {
        padding-right: 40px;
        font-size: 30px;
        text-align: right;
        border-bottom: 2px solid #ffff;
    }
}
</style>
