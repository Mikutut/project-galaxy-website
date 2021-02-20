<template>
  <div class="form-textarea-container">
    <textarea :id="inputId" :value="props.value" :placeholder="props.placeHolder" autocomplete="off" @input="handleInput"></textarea> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { nanoid } from "nanoid";

export default defineComponent({
  name: 'FormTextarea',
  props: ["value", "placeHolder"],
  emits: ["input"],
  setup(props, { emit }) {

    const inputId = `mkt-form-textarea-${nanoid(12)}`;

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

.form-textarea-container {

  background: hsl(0, 0%, 0%);
  margin: 0.5rem 0;
  width: 100%;

  & > textarea {
    width: 100%;
    background: transparent;
    overflow: hidden;
    color: hsl(0, 0%, 60%);
    font-size: 2.5vmin; 
    padding: 0.25rem 0;
    border: 1px solid transparent;
    transition: border .35s;
    padding: 0.5rem;
    resize: none;

    &:focus-within {
      border: 1px solid map-get($colors, "c3");
    }
  }
}
</style>