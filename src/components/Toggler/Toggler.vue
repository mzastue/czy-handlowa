<template>
  <div :class="$style.toggler">
    <input
      id="option"
      type="checkbox"
      :class="$style.togglerInput"
      v-model="isChecked"
      @change="input(isChecked)"
    />
    <label :class="$style.togglerLabel" for="option">
      <div
        :class="$style.togglerSwitch"
        data-checked="Najbliższa"
        data-unchecked="Handlowa"
      ></div>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})
export default class Toggler extends Vue {
  @Prop(Boolean) readonly value!: boolean;

  isChecked: boolean;

  constructor() {
    super();
    this.isChecked = this.value;
  }

  @Emit()
  input(value: boolean) {}
}
</script>

<style module>
.toggler {
  position: relative;
}
.toggler *,
.toggler *:before,
.toggler *:after {
  box-sizing: border-box;
}

.toggler {
  composes: shadow from '@/components/shared/layout.css';
}

.togglerInput {
  position: absolute;
  top: 0;
  left: 0;
}

.togglerInput:checked ~ label .togglerSwitch:before {
  content: attr(data-unchecked);
  left: 50%;
  color: var(--color-accent-secondary);
}

.togglerInput:checked ~ label .togglerSwitch:after {
  content: attr(data-checked);
}

.togglerLabel {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-accent-secondary);
  font-size: 1.8rem;
}

.togglerSwitch {
  position: relative;
}
.togglerSwitch:before {
  content: attr(data-checked);
  position: absolute;
  top: 0;
  text-align: center;
}

.togglerSwitch:after {
  content: attr(data-unchecked);
  position: absolute;
  z-index: 5;
  text-align: center;
  background: var(--color-accent-secondary);
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

.togglerInput:focus ~ label .togglerSwitch:after,
.togglerInput:hover ~ label .togglerSwitch:after {
  color: var(--color-bg);
}

.toggler label .togglerSwitch {
  transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
  background: var(--color-bg);
}

.toggler label .togglerSwitch:before {
  color: var(--color-accent-secondary);
}

.togglerInput:checked ~ label .togglerSwitch:after {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.togglerSwitch {
  height: 36px;
  flex: 0 0 100%;
}

.togglerSwitch:before {

  left: 0;
  width: 50%;
  line-height: 36px;
  padding: 0 12px;
}

.togglerSwitch:after {
  width: 50%;
  line-height: 36px;

  transition: -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);
  transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
  transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1),
    -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);
  color: var(--color-bg);
}
</style>
