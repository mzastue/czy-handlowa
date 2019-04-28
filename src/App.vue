<template>
  <div id="app">
    <Answer :calendar="calendar" />
    <span>New version in progress! Stay tuned!</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import moment from '@/utils/datetime';
import Answer from './components/Answer.vue';
import Calendar from '@/utils/Calendar';
import Day from '@/utils/Day';

@Component({
  components: {
    Answer,
  },
})
export default class App extends Vue {
  calendar: Calendar;

  constructor() {
    super();
    this.calendar = new Calendar(new Day(moment()));
  }

  mounted(): void {
    const hour = moment().hour();

    if (hour >= 22 || hour < 6) {
      document.body.dataset.theme = 'dark';
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/main.scss';
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-bg);
  color: var(--color-text);
  height: 100vh;
}

#app span {
  position: absolute;
  bottom: 20px;
  align-self: center;
  color: var(--color-text);
}

.divider {
  color: var(--color-accent);
}
</style>
