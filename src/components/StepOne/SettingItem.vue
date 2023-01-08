<template>
  <li>
    <Form>
      <Field type="text" name="level" :rules="isRequired" />
      <ErrorMessage class="error-message" name="level" />
    </Form>
    <Form>
      <Field type="number" name="QTeam" :rules="isRequired && isNaturalNumber" />
      <ErrorMessage class="error-message" name="QTeam" />
    </Form>
    <Form>
      <Field type="number" name="qTeam" :rules="isRequired && isNaturalNumber" />
      <ErrorMessage class="error-message" name="qTeam" />
    </Form>
    <Form>
      <Field type="number" name="game-count" :rules="isRequired && isNaturalNumber" />
      <ErrorMessage class="error-message" name="game-count" />
    </Form>
    <Form>
      <Field type="number" name="row-count" :rules="isRequired && isNaturalNumber" />
      <ErrorMessage class="error-message" name="row-count" />
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
