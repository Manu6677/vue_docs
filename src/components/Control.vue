<script>
export default {
  props: ["startTimerInApp", "isTimerStoped"],
  data() {
    return {};
  },
  methods: {
    start() {
      this.$emit("countDownStart", this.startTimerInApp);
      console.log(this.startTimerInApp);
    },
    end() {
      this.$emit("countDownEnd", this.isTimerStoped);
    },
  },
};
</script>

<template>
  <div>
    <h3>This is Timer App</h3>
    <h3>Timer: {{ this.startTimerInApp }}</h3>

    <span class="start-end-btn">
      <button @click="start">Start</button>
      <button @click="end">End</button>
    </span>
  </div>
</template>

<style scoped>
.start-end-btn {
  display: flex;
  justify-content: space-between;
}
</style>
