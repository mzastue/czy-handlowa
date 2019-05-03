<template>
<header>
  <h1>Miesiąc</h1>
  <Toggler :class="$style.toggler" v-model="isNearestSundayChecked" />
</header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Toggler from '@/components/Toggler/Toggler.vue';

@Component({
  components: {
    Toggler,
  },
})
export default class Header extends Vue {
  isNearestSundayChecked: boolean;

  constructor() {
    super();
    this.isNearestSundayChecked = true;
  }
}
</script>

<style module>
h1 {
  font-size: 5rem;
}

.toggler {
  width: 50%;
}
</style>