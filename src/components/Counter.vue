<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCounter", "delFromCounter"]),
    ...mapActions(["addRandomToCounter"])
  },
};
</script>

<template>
  <div>
    <h2>Vuex Counter</h2>
    
    <button @click="delFromCounter(parseInt(value))">-</button>
    <input type="number" v-model="value" />
    <button @click="addToCounter(parseInt(value))">+</button>
    <div>
      <button class="btn" @click="addRandomToCounter">Add Random Number</button>
    </div>
  </div>
</template>

<style>
.counter {
  font-size: 100%;
}

 .btn {
        border-radius: 0.5rem;
        width: auto;
        background: #41B983;
        margin-top: 1rem;
        color: white;
        cursor: pointer;
        align-content: center;
        margin-bottom: 20px;
    }

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
  margin: 10px;
  text-align: center;
}

input {
  padding: 0.4rem;
  margin: 0;
  text-align: center;
}

</style>
