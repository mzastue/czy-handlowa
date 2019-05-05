<template>
  <main>
    <div :class="$style.days">
      <DayBlock
        :class="$style.daysBlock"
        title="dzisiaj"
        :dayNumber="6"
        :dayName="today | dayText"
        :month="calendar.getMonth(today)"
      />
      <DayBlock
        :class="$style.daysBlock"
        :title="daysToNextSunday | nextSundayTitle"
        :dayNumber="11"
        :dayName="nextSunday | dayText"
        :month="calendar.getMonth(nextSunday)"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DayBlock from '@/components/DayBlock/DayBlock.vue';

import moment from '@/utils/datetime';
import { CalendarInterface } from '@/utils/Calendar';
import Day, { DayInterface } from '@/utils/Day';

@Component({
  components: {
    DayBlock,
  },

  filters: {
    dayText(day: Day): string {
      const weekday = day.date.format('dddd').toLowerCase();
      const sundayText = day.isSunday
        ? ` ${day.isCommercial ? ' handlowa' : ' niehandlowa'}`
        : '';
      return ` ${weekday}${sundayText}`;
    },

    nextSundayTitle(nextSundayInDays: number): string {
      return `za ${nextSundayInDays.toString()} dni..`;
    },
  },
})
export default class Main extends Vue {
  @Prop(Object) readonly calendar!: CalendarInterface;

  today: Day = this.calendar.getToday();
  nextSunday: Day = this.getNextSunday(this.today);

  getNextSunday(day: Day): Day {
    const nextSundayInDays = 7 - day.date.day();
    const nextSunday = new Day(moment(day.date).add(nextSundayInDays, 'days'));
    this.calendar.addDay(nextSunday);
    return nextSunday;
  }

  get daysToNextSunday(): number {
    return this.nextSunday.date.diff(this.today.date, 'days');
  }
}
</script>

<style module lang="scss">
@import '@/assets/styles/_breakpoints.scss';

.days {
  display: inline-flex;
  flex-direction: row;
  composes: shadow from '@/components/shared/layout.css';

  @include media('<tablet') {
    display: block;
  }

  @include media('<tablet') {
    box-shadow: none;
  }
}

.daysBlock {
  composes: shadow from '@/components/shared/layout.css';
  height: 410px;

  @include media('>=tablet') {
    box-shadow: none;
  }
}

@include media('>=desktop') {
  .daysBlock:nth-child(2) {
    border-left: none;
  }
}

@include media('<tablet') {
  .daysBlock:nth-child(2) {
    margin-top: 40px;
  }
}

</style>