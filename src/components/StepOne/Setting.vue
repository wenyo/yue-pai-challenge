<template>
  <div class="contest-setting">
    <ul>
      <li class="table-title">
        <span>賽程階段</span>
        <span>Q人數/隊伍</span>
        <span>q人數/隊伍</span>
        <span>分組數</span>
        <span>道數</span>
      </li>
      <SettingItem />
    </ul>
    <Button class="add" :type="BUTTON_TYPE.FIVE" :click_fun="() => {}">+</Button>
  </div>
</template>

<script>
import { BUTTON_TYPE } from '../../utils/Enum';
import SettingItem from './SettingItem.vue';
import Button from '../Button.vue';

export default {
  data() {
    return {
      BUTTON_TYPE,
    };
  },
  components: { SettingItem, Button },
};
</script>

<style lang="scss" scoped>
.contest-setting {
  position: relative;
  display: inline-block;
  margin-top: 40px;

  ul {
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
  }
}

.add {
  position: absolute;
  bottom: 0;
  right: -20px;
  transform: translateX(100%);
}

.table-title {
  margin-bottom: 4px;

  span {
    flex-shrink: 0;
    display: inline-block;
    width: 200px;
  }
}
</style>
