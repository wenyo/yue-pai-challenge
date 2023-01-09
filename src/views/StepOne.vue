<template>
  <Layout :step="1">
    <Form @submit="() => {}">
      <div class="contain-box">
        <div class="contain">
          <h3 class="step-title">1 填寫基本數據</h3>
          <Info />
          <Setting />
        </div>
      </div>

      <StepBtn prevLink="/" nextLink="/step_two" :nextDisable="true" />
    </Form>
  </Layout>
</template>

<script>
import { Form } from 'vee-validate';
import { BUTTON_TYPE } from '../utils/Enum';
import Layout from '../layout/Layout.vue';
import Info from '../components/StepOne/Info.vue';
import Setting from '../components/StepOne/Setting.vue';
import StepBtn from '../components/StepBtn.vue';

export default {
  data() {
    return {
      BUTTON_TYPE,
    };
  },
  components: { Layout, Info, Setting, StepBtn, Form },
};
</script>
