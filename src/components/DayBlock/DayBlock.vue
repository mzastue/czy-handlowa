<template>
<div :class="$style.box">
  <h3 :class="$style.title">{{ title }}</h3>
  <h2 :class="$style.month">{{ month }}</h2>
  <h1 :class="$style.dayNumber">{{ dayNumber }}</h1>
  <h2 :class="$style.dayName">{{ dayName }}</h2>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class DayBlock extends Vue {
  @Prop(String) readonly title!: string;
  @Prop(Number) readonly dayNumber!: number;
  @Prop(String) readonly dayName!: string;
  @Prop(String) readonly month!: string;
}
</script>

<style module lang="scss">
  .box {
    composes: box from '@/components/shared/layout.css';

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @mixin verticallyCenter() {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    position: absolute;
    top: -30px;
    left: -1px;
    padding-left: 10px;
    height: 30px;
    width: 50%;
    text-transform: uppercase;
    font-size: 2.3rem;
    background: var(--color-accent-secondary);
    color: var(--color-bg);
    text-align: left;
  }

  .month {
    font-size: 2.5rem;
    padding-top: 20px;
  }

  .dayNumber {
    @include verticallyCenter;
    align-items: flex-end;
    font-size: 20rem;
    flex-grow: 1;
    vertical-align: middle;
  }

  .dayName {
    @include verticallyCenter;
    align-items: flex-start;
    width: 90%;
    align-self: center;
    font-size: 3.5rem;
    flex-grow: 1;
    text-transform: uppercase;
  }
</style>