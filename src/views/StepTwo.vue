<template>
  <Layout :step="2">
    <div class="contain-box">
      <div class="contain">
        <h3 class="step-title">2 填寫選手/隊伍名稱</h3>
      </div>
    </div>

    <StepBtn prevLink="/step_one" nextLink="/step_three" />
  </Layout>
</template>

<script>
import { BUTTON_TYPE } from '../utils/Enum';
import Layout from '../layout/Layout.vue';
import StepBtn from '../components/StepBtn.vue';

export default {
  data() {
    return {
      BUTTON_TYPE,
    };
  },
  components: { Layout, StepBtn },
};
</script>
