<template>
  <div class="wrap">
    <Header />
    <div class="outer">
      <StepLine :now-step="1" />

      <div class="contain-box">
        <div class="contain">
          <h3 class="step-title">1.1/選擇賽制與隊伍數</h3>
          <Info />
          <Setting />
        </div>
      </div>

      <StepBtn prevLink="/" nextLink="/steptwo" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { BUTTON_TYPE } from '../utils/Enum';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import StepLine from '../components/StepLine.vue';
import Info from '../components/StepOne/Info.vue';
import Setting from '../components/StepOne/Setting.vue';
import StepBtn from '../components/StepBtn.vue';

export default {
  data() {
    return {
      BUTTON_TYPE,
    };
  },
  components: { Header, Footer, StepLine, Info, Setting, StepBtn },
};
</script>
