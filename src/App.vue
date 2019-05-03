<template>
  <div id="app" :class="[$style.app, $style.theme, $style[theme] ]">
    <div :class="$style.wrapper">
        <div :class="$style.wrapperSidebar">
          <Logo :class="$style.logo" />
        </div>
        <div :class="$style.wrapperMain">
          <AppHeader :class="$style.appHeader"></AppHeader>
          <AppMain></AppMain>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AppHeader from '@/components/Header/Header.vue';
import AppMain from '@/components/Main/Main.vue';
import Logo from '@/components/Logo/Logo.vue';

import moment from '@/utils/datetime';
import Calendar from '@/utils/Calendar';
import Day from '@/utils/Day';

@Component({
  components: {
    AppHeader,
    AppMain,
    Logo,
  },
})
export default class App extends Vue {
  calendar: Calendar;
  theme: string;

  constructor() {
    super();
    this.calendar = new Calendar(new Day(moment()));
    this.theme = 'themeLight';
  }

  mounted(): void {
    const hour = moment().hour();

    if (hour >= 22 || hour < 6) {
      document.body.dataset.theme = 'dark';
    }
  }
}
</script>

<style module lang="scss">
@import 'assets/style.scss';
@value white as colorWhite, black as colorBlack, accent as colorAccent, accentDark as colorAccentDark from "./components/shared/colors.css";

.app {
  height: 100%;
}

.appHeader {
  height: 200px;
  // margin-bottom: 100px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1300px;
  padding-top: 40px;
}

.wrapperSidebar {
  width: 20%;
}

.wrapperMain {
  padding-left: 200px;
  width: 80%;
}

.theme {
  --color-bg: colorWhite;
  --color-text: colorBlack;
  --color-accent-primary: colorAccent;
  --color-accent-secondary: colorBlack;
  --color-accent-dark: colorAccentDark;
}

.themeLight {
  composes: theme;

  color: var(--color-text);
  background: var(--color-bg);
}

.themeDark {
  composes: theme;
  --color-accent-primary: colorBlack;
  --color-accent-secondary: colorAccent;
  --color-bg: colorAccentDark;
  --color-text: colorWhite;

  color: var(--color-text);
  background: var(--color-bg);
}

.logo {
  padding-left: 40px;
}
</style>
