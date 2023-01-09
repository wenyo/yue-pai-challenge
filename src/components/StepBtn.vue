<template>
  <div class="step">
    <router-link :to="prevLink" custom v-slot="{ navigate }">
      <Button :style="BUTTON_TYPE.FIVE" :click_fun="navigate">上一步</Button>
    </router-link>
    <router-link :to="nextLink" custom v-slot="{ navigate }">
      <Button :style="BUTTON_TYPE.SECOND" type="submit" :click_fun="navigate" :disabled="nextDisable">下一步</Button>
    </router-link>
  </div>
</template>

<script>
import { BUTTON_TYPE } from '../utils/Enum';
import Button from '../components/Button.vue';

export default {
  props: {
    prevLink: {
      type: String,
      default: '/',
    },
    nextLink: {
      type: String,
      default: '/',
    },
    nextDisable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      BUTTON_TYPE,
    };
  },
  components: { Button },
};
</script>
