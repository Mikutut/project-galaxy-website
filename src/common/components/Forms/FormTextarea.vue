<template>
  <textarea :placeholder="props.placeHolder" v-model="mV" autocomplete="off" @input="emit('update:modelValue', $event.target.value);"></textarea> 
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: 'FormTextarea',
  props: ["modelValue", "placeHolder"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {

    const mV: Ref<string> = ref(props.modelValue);

    return {
      props,
      emit,
      mV
    };
  }
})
</script>

<style lang="scss" scoped>
@import "../../styles/color-palette.scss";

textarea {
  margin: 0.5rem 0;
  background: hsl(0, 0%, 0%);
  width: 100%;
  background: transparent;
  overflow: hidden;
  color: hsl(0, 0%, 60%);
  font-size: 3vmin; 
  padding: 0.25rem 0;
  border: 1px solid transparent;
  transition: border .35s;
  padding: 0.5rem;
  resize: none;

  &:focus-within {
    border: 1px solid map-get($colors, "c3");
  }
}
</style>