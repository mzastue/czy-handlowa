<template>
<header>
  <h1>Miesiąc</h1>
  <div>najblisza niedziela / handlowa niedziela</div>
</header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {

}
</script>

<style module>
h1 {
  font-size: 5rem;
}
</style>