<template>
  <div class="form-input-container">
    <input :id="inputId" type="text" :placeholder="props.placeHolder" :value="props.modelValue" autocomplete="off" @input="emit('update:modelValue', $event.target.value);"/> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { nanoid } from "nanoid";

export default defineComponent({
  name: 'FormInput',
  props: ["modelValue", "placeHolder"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    
    const inputId = `mkt-form-input-${nanoid(12)}`;

    return {
      props,
      emit,
      inputId
    };
  }
})
</script>

<style lang="scss" scoped>
@import "../../styles/color-palette.scss";

.form-input-container {

  background: hsl(0, 0%, 0%);
  position: relative;
  margin: 0.5rem 0;
  width: 100%;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    background: map-get($colors, "c3");
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform .3s;
  }

  &:focus-within {
    &::after {
      transform: scaleX(1);
    }
  }

  & > input {
    width: 100%;
    background: transparent;
    overflow: hidden;
    color: hsl(0, 0%, 60%);
    font-size: 3vmin; 
    padding: 0.25rem 0;
  }
}
</style>