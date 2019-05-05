<template>
<header>
  <h1>Niedziela</h1>
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
  @Prop(String) readonly month!: string;

  isNearestSundayChecked: boolean;

  constructor() {
    super();
    this.isNearestSundayChecked = true;
  }
}
</script>

<style module lang="scss">
@import '@/assets/styles/_breakpoints.scss';

h1 {
  font-size: 4rem;
  font-weight: 900;
}

.toggler {
  width: 50%;
  margin-top: 20px;

  @include media('<=tablet') {
    width: 100%;
  }
}
</style>