<template>
<div :class="$style.box">
  <h3 :class="$style.title">{{ title }}</h3>
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
    line-height: 2.8rem;
    background: var(--color-accent-secondary);
    color: var(--color-bg);
    text-align: left;
  }

  .dayNumber {
    @include verticallyCenter;
    align-items: flex-end;
    font-size: 15rem;
    flex-grow: 1;
    vertical-align: middle;
  }

  .dayName {
    @include verticallyCenter;
    align-items: flex-start;
    font-size: 4.5rem;
    flex-grow: 1;
  }
</style>