<template>
  <main>
    <div :class="$style.days">
      <DayBlock
        :class="$style.daysBlock"
        title="dzisiaj"
        dayNumber="6"
        dayName="wtorek"
      />
      <DayBlock
        :class="$style.daysBlock"
        title="nie dzisiaj"
        dayNumber="11"
        dayName="poniedziałek"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DayBlock from '@/components/DayBlock/DayBlock.vue';

@Component({
  components: {
    DayBlock,
  },
})
export default class Main extends Vue {}
</script>

<style module>
.days {
  display: inline-flex;
  flex-direction: row;
  composes: shadow from '@/components/shared/layout.css';
}

.daysBlock {
  width: 326px;
  height: 410px;
}

.daysBlock:nth-child(2) {
  border-left: none;
}
</style>