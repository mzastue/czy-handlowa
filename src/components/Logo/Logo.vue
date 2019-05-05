<template>
  <div class="logo">
    <svg
    :class="$style.desktop"
      xmlns="http://www.w3.org/2000/svg"
      width="81"
      height="144"
      viewBox="0 0 81 144"
    >
      <g id="Sidebar" transform="translate(0 2.331)">
        <rect
          id="Sidebar-2"
          data-name="Sidebar"
          width="81"
          height="139.339"
          fill="none"
        />
        <text
          id="CZY_HAN_DLO_WA_"
          data-name="CZY
HAN
DLO
WA?"
          transform="translate(74.021 27.669)"
          font-size="30"
          font-family="Lato-Black, Lato"
          font-weight="800"
          letter-spacing="0.174em"
        >
          <tspan x="-68.475" y="0" :class="$style.svgTextNormal">CZY</tspan>
          <tspan letter-spacing="0.035em" :class="$style.svgTextAccent">
            <tspan x="-67.95" y="36">HAN</tspan>
          </tspan>
          <tspan letter-spacing="0.1em" :class="$style.svgTextAccent">
            <tspan x="-68.475" y="72">DLO</tspan>
          </tspan>
          <tspan letter-spacing="0.035em">
            <tspan x="-67.965" y="108" :class="$style.svgTextAccent">WA</tspan>
            <tspan y="108" :class="$style.svgTextNormal">?</tspan>
          </tspan>
        </text>
      </g>
    </svg>

    <svg
      :class="$style.mobile"
      xmlns="http://www.w3.org/2000/svg"
      width="284"
      height="36.079"
      viewBox="0 0 284 36.079"
    >
      <g id="Sidebar" transform="translate(9.979 0.331)">
        <rect
          id="Sidebar-2"
          data-name="Sidebar"
          width="81"
          height="35.748"
          fill="none"
        />
        <text
          id="CZYHANDLOWA_"
          data-name="CZYHANDLOWA?"
          transform="translate(271.021 29.669)"
          fill="#eaebeb"
          font-size="30"
          font-family="Lato-Black, Lato"
          font-weight="800"
          letter-spacing="0.174em"
        >
          <tspan x="-280.515" y="0" :class="$style.svgTextNormal">CZY</tspan>
          <tspan y="0" letter-spacing="0.035em" :class="$style.svgTextAccent">HAN</tspan>
          <tspan y="0" letter-spacing="0.1em" :class="$style.svgTextAccent">DLO</tspan>
          <tspan y="0" letter-spacing="0.035em" :class="$style.svgTextAccent">WA</tspan>
          <tspan y="0" letter-spacing="0.035em" :class="$style.svgTextNormal">?</tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Logo extends Vue {}
</script>

<style module lang="scss">
@import '@/assets/styles/_breakpoints.scss';

.desktop {
  @include media('>desktop') {
    display: block;
  }

  @include media('<desktop') {
    display: none;
  }
}

.mobile {
  @include media('<desktop') {
    display: block;
  }

  @include media('>desktop') {
    display: none;
  }
}

.svgTextAccent {
  fill: var(--color-accent-secondary);
}

.svgTextNormal {
  fill: #cacccc;
}
</style>