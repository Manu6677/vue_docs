<script>
import Control from "./Control.vue";
export default {
  components: { Control },
  data() {
    return {
      isModalClicked: false,
      isActive: false,
      titleOfTimer: "",
      TimerList: [
      ],
    };
  },
  methods: {
    delTimer(timerId) {
      this.TimerList = this.TimerList.filter(({ id }) => id !== timerId);
    },
    addedTimer() {
      this.isActive = true;
      
    },
    enterTitle() { 
      this.isActive = false;
      // console.log(this.titleOfTimer);
      // const data = {
      //   title: this.titleOfTimer,
      //   id: Math.random().toString(),
      //   TimerCount: 0,
      // }

      // this.TimerList.push(JSON.parse(JSON.stringify(data)));

      this.TimerList.push({
        title: this.titleOfTimer,
        id: Math.random().toString(),
        TimerCount: 0
      })

      this.titleOfTimer=""
    },
  },
};
</script>

<template>
  <div class="Modal_view">
    <h3>This is Timer App</h3>

    <button @click="addedTimer">Add Timer</button>
    <div class="TimerRow">
      <Control
        v-for="item in TimerList"
        :key="item.id"
        :id="item.id"
        :titleOfTimerCard="item.title"
         @del="delTimer($event)"
      />
    </div>

    <div class="deactivate" :class="{ 'active': isActive }">
      <div class="modal-text">
        <h4>You want to add Timer?</h4>
        <div>
          <label>Title of Timer: </label>
          <input
            v-model="titleOfTimer"
            placeholder="Type Here"
            @keyup.enter="enterTitle"
          />
        </div>
        <!-- <input type="checkbox" v-model="isActive" /> -->
      </div>
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
  z-index: 0;
}

.Modal_view {
  position: relative;
  z-index: 0;
}

.deactivate {
  display: none;
}
.active {
  display: block;
  top: 0;
  left: -100px;
  position: absolute;
  z-index: 10;
  height: 450px;
  width: 500px;
  background-color: rgb(96, 96, 44);
  border-radius: 50px;
}
</style>
