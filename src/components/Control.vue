<script>
export default {
  props: ["indexNumber"],
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
      this.$emit("del", this.indexNumber);
    },
  },
};
</script>

<template>
  <div>
    <div class="timer">
      <h3>Count: {{ this.startTimer }}</h3>
      <button v-if="isStartClicked == false" @click="start">Start</button>
      <button v-else @click="pause">Pause</button>
    </div>
    <button @click="Del">Del</button>
  </div>
</template>

<style scoped>
.timer {
  margin: 10px;
}
</style>
