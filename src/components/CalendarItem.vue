<template>
  <div class="calendar-item">
    <img
      :src="event.isDone() ? getImgUrl('calendar-done') : getImgUrl('calendar')"
      height="26"
    />
    <div class="infos">
      <p class="summary">{{ event.summary }}</p>
      <p class="start-time">{{ event.isAllDay ? "All day" : createDate() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Vue } from "vue-class-component";
import { CalendarEvent } from "../models/CalendarEvent";

export default class CalendarItem extends Vue {
  @Prop() event: CalendarEvent;
  createDate() {
    const date = new Date(this.event.startTime);

    let period = "AM";
    if (date.getHours() > 12) period = "PM";
    let hours = (((date.getHours() + 11) % 12) + 1).toString();

    return hours + ":" + date.getMinutes() + " " + period;
  }

  public getImgUrl(picture: string) {
    return require("@/assets/icons/" + picture + ".svg");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calendar-item {
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 15px 0 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);

  .infos {
    display: flex;
    justify-content: space-between;
    flex: 2;
    padding-left: 12px;
  }

  .start-time {
    opacity: 0.7;
  }
}
</style>
