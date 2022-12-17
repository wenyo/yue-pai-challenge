<template>
  <div class="contest-left">
    <label for="">
      <span>賽事類型</span>
      <select name="" id=""></select>
    </label>
    <label for="">
      <span>賽事模式</span>
      <select name="" id=""></select>
    </label>
    <label for="">
      <span>賽事名稱</span>
      <input type="text" name="" id="" />
    </label>
    <label for="">
      <span>參賽人數/隊伍</span>
      <input type="number" name="" id="" />
    </label>
    <label for="">
      <span>成績單位</span>
      <select name="" id=""></select>
    </label>
    <label for="">
      <span>LOGO</span>
      <Button class="file-input" :type="BUTTON_TYPE.FORTH" :click_fun="() => uploadImage.click()">選擇圖片</Button>
      <!-- <input ref="uploadImage" type="file" accept="image/*" @change="imgChange" />
      <Button :type="BUTTON_TYPE.FIVE" :click_fun="resetImg" :disabled="!imgBase64">清除圖片</Button>
      <img class="preview-img" :src="imgBase64" v-if="imgBase64" /> -->
    </label>
  </div>
</template>

<script>
import { CONTEST_TYPE, BUTTON_TYPE } from '../../utils/Enum';
import Button from '../Button.vue';

export default {
  components: { Button },
  data() {
    return {
      CONTEST_TYPE,
      BUTTON_TYPE,
    };
  },
};
</script>
