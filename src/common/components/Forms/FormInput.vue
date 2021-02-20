<template>
  <div class="form-input-container">
    <input :id="inputId" type="text" :placeholder="props.placeHolder" :value="props.value" autocomplete="off" @input="handleInput"/> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { nanoid } from "nanoid";

export default defineComponent({
  name: 'FormInput',
  props: ["value", "placeHolder"],
  emits: ["input"],
  setup(props, { emit }) {

    const inputId = `mkt-form-input-${nanoid(12)}`;

    console.log(props);

    return {
      props,
      handleInput: () => {
        emit('input', props.value);
      },
      inputId
    }
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