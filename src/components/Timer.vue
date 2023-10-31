<script>
import Control from "./Control.vue";
export default {
  components: { Control },
  data() {
    return {
      // startTimer: 0,
      // isTimerStoped: false,
      // myInterval: null,
      TimerList: [
        {
          id: 1,
          TimerCount: 0,
        },
      ],
      nextTimerId: 1,
    };
  },
  methods: {
    // countDownStarted(data) {
    //   this.isTimerStoped = false;
    //   this.myInterval = setInterval(() => {
    //     if (this.isTimerStoped == false) {
    //       this.startTimer = this.startTimer + 1;
    //       // console.log(this.startTimer);
    //     }
    //   }, 1000);
    // },

    // countDownEndNow(data) {
    //   console.log(data);
    //   this.isTimerStoped = true;
    //   // this.startTimer = 0;
    //   clearInterval(this.myInterval);
    // },

    delTimer(data) {
      this.TimerList.splice(this.TimerList[data], 1);
    },
    addedTimer() {
      this.TimerList.push({
        id: this.nextTimerId++,
        TimerCount: 0,
      });
    },
  },
};
</script>

<template>
  <div>
    <h3>This is Timer App</h3>
    <button @click="addedTimer">Add Timer</button>
    <div class="TimerRow">
      <Control
        v-for="(item, index) in TimerList"
        :key="index"
        :indexNumber="index"
        @del="delTimer($event)"
      />
    </div>
  </div>
</template>

<style scoped>
.TimerRow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 20px;
}
</style>
