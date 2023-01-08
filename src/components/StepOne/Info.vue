<template>
  <div class="contest-info">
    <Form>
      <span>賽事類型</span>
      <select name="" id="">
        <option v-for="(type, key) in CONTEST_TYPE" :value="key" :key="key">{{ type.ch }}</option>
      </select>
    </Form>
    <Form>
      <span>賽事模式</span>
      <select name="" id="">
        <option v-for="(mode, key) in CONTEST_MODE" :value="key" :key="key">{{ mode.ch }}</option>
      </select>
    </Form>
    <Form>
      <span>賽事名稱</span>
      <Field type="text" name="name" :rules="isRequired" />
      <ErrorMessage class="error-message" name="name" />
    </Form>
    <Form>
      <span>參賽人數/隊伍</span>
      <Field type="number" name="count" min="0" :rules="isRequired && isNaturalNumber" />
      <ErrorMessage class="error-message" name="count" />
    </Form>
    <Form>
      <span>成績單位</span>
      <select name="" id="">
        <option v-for="(unit, key) in UNIT_TYPE" :value="key" :key="key">{{ unit.ch }}</option>
      </select>
    </Form>
    <label class="file-block">
      <span @click="() => uploadImage.click()">LOGO</span>
      <div class="file">
        <Button class="file-input" :type="BUTTON_TYPE.FORTH" :click_fun="() => uploadImage.click()">選擇圖片</Button>
        <input ref="uploadImage" type="file" accept="image/*" @change="imgChange" />
        <Button :type="BUTTON_TYPE.FIVE" :click_fun="resetImg" :disabled="!imgBase64">清除圖片</Button>
        <img class="preview-img" :src="imgBase64" v-if="imgBase64" />
      </div>
    </label>
  </div>
</template>

<script>
import { ref } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { CONTEST_TYPE, CONTEST_MODE, UNIT_TYPE, BUTTON_TYPE } from '../../utils/Enum';
import ErrorMsgFunc from '../../utils/ErrorMsg';
import Button from '../Button.vue';

export default {
  components: { Button, Field, ErrorMessage, Form },
  setup() {
    const uploadImage = ref(null);
    return { uploadImage };
  },
  data() {
    return {
      CONTEST_TYPE,
      CONTEST_MODE,
      BUTTON_TYPE,
      UNIT_TYPE,
      error: {
        count: '',
        name: '',
      },
    };
  },
  computed: {
    ...mapState(['imgBase64']),
  },
  methods: {
    ...ErrorMsgFunc,
    ...mapMutations(['imgBase64Change']),
    imgChange() {
      const file = this.uploadImage.files[0];
      console.log(file);
      this.imgToBase64(file);
    },
    imgToBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgBase64Change({ img: reader.result });
      };
      reader.onerror = (error) => {
        console.error('Error: ', error);
      };
    },
    resetImg() {
      this.imgBase64Change({ img: '' });
      this.uploadImage.value = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.contest-info {
  display: flex;
  gap: 20px;

  form,
  label {
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
  }
}

.file {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 70px;
  justify-content: space-between;
}

.preview-img {
  display: block;
  height: 70px;
  margin-left: 10px;
}
</style>
