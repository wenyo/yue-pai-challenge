<template>
  <div class="wrap">
    <Header />
    <div class="outer">
      <StepLine :now-step="1" />
      <div class="contain-box">
        <div class="contain">
          <h3 class="step-title">1.1/選擇賽制與隊伍數</h3>
          <ContestInfo />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import StepLine from '../components/StepLine.vue';
import ContestInfo from '../components/StepOne/ContestInfo.vue';

export default {
  components: { Header, Footer, StepLine, ContestInfo },
};
</script>
