<script>
import Control from "./Control.vue";
export default {
  components: { Control },
  data() {
    return {
      startTimer: 0,
      isTimerStoped: false,
      myInterval: null,
    };
  },
  methods: {
    countDownStarted(data) {
      this.isTimerStoped = false;
      this.myInterval = setInterval(() => {
        if (this.isTimerStoped == false) {
          this.startTimer = this.startTimer + 1;
          // console.log(this.startTimer);
        }
      }, 1000);
    },

    countDownEndNow(data) {
      console.log(data);
      this.isTimerStoped = true;
      // this.startTimer = 0;
      clearInterval(this.myInterval);

      // clearInterval(this.myInterval);
    },
  },
};
</script>

<template>
  <div>
    <Control
      :startTimerInApp="startTimer"
      @countDownStart="countDownStarted($event)"
      @countDownEnd="countDownEndNow($event)"
      :isTimerStoped="isTimerStoped"
    />
  </div>
</template>

<style scoped></style>
