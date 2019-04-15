<template>
  <div>
    <h2>Dziś</h2>
    <h1>{{ today.date | dateFormat }}</h1>
    <h2>{{ dayText(today) }}</h2>
    <h3 class="divider">* * *</h3>
    <h2>Następnie</h2>
    <h1>{{ nextSunday.date | dateFormat }}</h1>
    <h2>{{ dayText(nextSunday) }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "@/utils/datetime";
import Day from '../utils/Day';

@Component({
  props: {
    calendar: Object,
  },

  filters: {
    dateFormat(value: moment.Moment) {
      return value.format('DD-MM-YYYY');
    },
  }
})
export default class Answer extends Vue {
  today: Day = this.calendar.getToday();
  nextSunday: Day = this.getNextSunday(this.today);

  dayText(day: Day) {
    const weekday = day.date.format('dddd').toLowerCase();
    const sundayText = day.isSunday ? ` ${day.isCommercial ? ' handlowa' : ' niehandlowa'}` : '';
    return ` ${weekday}${sundayText}`;
  }

  getNextSunday(day: Day): Day {
    const nextSundayInDays = 7 - day.date.day();
    const nextSunday = new Day(moment(day.date).add(nextSundayInDays, 'days'));
    this.calendar.addDay(nextSunday);
    return nextSunday;
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2em;
}

h3 {
  padding: 20px 0;
}
</style>
