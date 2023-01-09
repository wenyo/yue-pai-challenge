<template>
  <li>
    <Form>
      <Field type="text" name="gameName" :rules="isRequired" v-model="gameInfo.gameName" />
      <ErrorMessage class="error-message" name="gameName" />
    </Form>
    <Form>
      <Field type="number" name="count_Q" :rules="isRequired && isNaturalNumber" v-model="gameInfo.count_Q" />
      <ErrorMessage class="error-message" name="count_Q" />
    </Form>
    <Form>
      <Field type="number" name="count_q" :rules="isRequired && isNaturalNumber" v-model="gameInfo.count_q" />
      <ErrorMessage class="error-message" name="count_q" />
    </Form>
    <Form>
      <Field type="number" name="teamCount" :rules="isRequired && isNaturalNumber" v-model="gameInfo.teamCount" />
      <ErrorMessage class="error-message" name="teamCount" />
    </Form>
    <Form>
      <Field type="number" name="track" :rules="isRequired && isNaturalNumber" v-model="gameInfo.track" />
      <ErrorMessage class="error-message" name="track" />
    </Form>
    <Button class="delete" :type="BUTTON_TYPE.SIX" :click_fun="() => {}">x</Button>
  </li>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { BUTTON_TYPE } from '../../utils/Enum';
import ErrorMsgFunc from '../../utils/ErrorMsg';
import Button from '../Button.vue';

export default {
  data() {
    return {
      BUTTON_TYPE,
    };
  },
  props: {
    gameInfo: {
      type: Object,
      default: {},
    },
  },
  components: { Button, Field, Form, ErrorMessage },
  methods: {
    ...ErrorMsgFunc,
  },
};
</script>

<style lang="scss" scoped>
input {
  flex-shrink: 0;
}
</style>
