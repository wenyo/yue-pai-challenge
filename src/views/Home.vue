<template>
  <div class="home wrap">
    <!-- change image -->
    <img class="cat" src="../assets/img/cat.png" alt="cat background" />
    <img class="exclamation" src="../assets/img/exclamation_mark.svg" alt="exclamation mark" />
    <div class="home-contain">
      <div class="logo">
        <img src="../assets/img/logo-bg.svg" alt="" />
        <img src="../assets/img/logo-yue_pai.svg" alt="" />
      </div>
      <p class="contest-text">
        挑戰賽類型(<span v-for="(info, type) in CONTEST_TYPE" :key="type">{{ info.ch }}</span
        >)
      </p>
      <div class="btn-area">
        <ReadFile />
        <router-link to="/step_one" custom v-slot="{ navigate }">
          <Button :style="BUTTON_TYPE.SECOND" :click_fun="navigate">開新賽程</Button>
        </router-link>
      </div>
    </div>
    <footer>
      <img src="../assets/img/logo-dream_way.svg" alt="" />
    </footer>
  </div>
</template>

<script>
import { CONTEST_TYPE, BUTTON_TYPE } from '../utils/Enum';
import Button from '../components/Button.vue';
import ReadFile from '../components/ReadFile.vue';

export default {
  name: 'Home',
  data() {
    return {
      CONTEST_TYPE,
      BUTTON_TYPE,
    };
  },
  components: { Button, ReadFile },
};
</script>

<style scoped lang="scss">
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/bg-homepage.jpg') center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.cat {
  position: absolute;
  z-index: 1;
  width: 55%;
  min-width: 500px;
  top: 50%;
  left: 45%;
  transform: translateY(-50%);
}

.exclamation {
  z-index: 1;
  position: absolute;
  width: 150px;
  bottom: 50px;
  left: 10px;
}

.home-contain {
  width: 60%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 70%;
  position: relative;
  margin-bottom: 10px;

  & img:last-child {
    position: absolute;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    width: 90%;
  }
}

.contest-text {
  display: flex;
  flex-direction: row;
  color: $primary-color-third;
  margin: 20px 0;
  font-weight: bold;

  span:first-child::after {
    content: '、';
  }
}

.btn-area {
  button {
    margin: 0 10px;
  }
}

footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color-master;

  img {
    height: 35%;
  }
}
</style>
