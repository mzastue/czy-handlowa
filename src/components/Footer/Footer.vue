<template>
<footer :class="$style.footer">
  {{ year }} &#124; czy-handlowa.pl &#124; Made with &#9829; in VueJs
</footer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class  extends Vue {
  year: number = new Date().getFullYear();
}
</script>

<style module>
.footer {
  color: var(--color-grey);
  margin-top: 40px;
  align-self: center;
}
</style>