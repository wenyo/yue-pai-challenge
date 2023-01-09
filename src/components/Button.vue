<template>
  <button :class="`${style} ${name}`" :type="type" @click="click_fun" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import { BUTTON_TYPE } from '../utils/Enum';
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      default: BUTTON_TYPE.MASTER,
      validator(value) {
        return Object.values(BUTTON_TYPE).includes(value);
      },
    },
    type: {
      type: String,
      default: 'button',
    },
    click_fun: {
      type: Function,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      BUTTON_TYPE,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  background: unset;
  border: unset;
  padding: 5px 20px;
  border: 1px solid $dark-100;
  border-radius: 2px;
  font-weight: bold;
  height: 30px;
  white-space: nowrap;
  cursor: pointer;

  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.master {
  background-color: $primary-color-master;
  color: $dark-500;
}
.second {
  background-color: $primary-color-second;
  color: $dark-500;
}
.third {
  background-color: $primary-color-third;
  color: $dark-500;
}
.forth {
  background-color: $primary-color-forth;
  color: $dark-100;
}
.five {
  background-color: $primary-color-five;
}
.six {
  border: unset;
  color: $dark-200;
  padding: 5px;

  &:hover {
    color: $dark-100;
  }
}
</style>
