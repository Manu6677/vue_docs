<script>
export default {
  props: ["id", "titleOfTimerCard"],
  data() {
    return {
      isStartClicked: false,
      startTimer: 0,
      isTimerStoped: false,
      myInterval: null,
    };
  },
  methods: {
    start() {
      this.isTimerStoped = false;
      this.isStartClicked = true;
      this.myInterval = setInterval(() => {
        if (this.isTimerStoped == false) {
          this.startTimer = this.startTimer + 1;
          // console.log(this.startTimer);
        }
      }, 1000);
    },

    pause() {
      clearInterval(this.myInterval);
      this.isTimerStoped = true;
      this.isStartClicked = false;
    },

    Del() {
      this.$emit("del", this.id);
    },
  },
};
</script>

<template>
  <div class="timer">
    <div class="">
      {{titleOfTimerCard}}
      <h3>Count: {{ this.startTimer }}</h3>
      <button v-if="isStartClicked == false" @click="start">Start</button>
      <button v-else @click="pause">Pause</button>
    </div>
    <button @click="Del" class="del-btn">Del</button>
  </div>
</template>

<style scoped>
.timer {
  margin: 10px;
  border: solid burlywood 1px;
  background-color: grey;
  border-radius: 20px;
  width: 170px;
  height: 180px;
}
.del-btn {
  margin-top: 10px;
}
</style>
