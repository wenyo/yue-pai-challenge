<template>
  <div class="wrap">
    <Header />
    <div class="outer">
      <StepLine :now-step="step" />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import { BUTTON_TYPE } from '../utils/Enum';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import StepLine from '../components/StepLine.vue';

export default {
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      BUTTON_TYPE,
    };
  },
  components: { Header, Footer, StepLine },
};
</script>
