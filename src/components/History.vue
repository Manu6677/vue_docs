<script>
import { mapState, mapGetters } from "vuex";
export default {
  methods: {},
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>

<template>
  <div>
    <h3 class="container">History !</h3>
    <div class="flex">
      <p v-for="(number, index) in history" :key="index" :class="activeIndexes(parseInt(value)).includes(index) && 'bold'" >{{ number }}</p>
    </div>
    {{ activeIndexes(value) }}
    <input type="number" placeholder="search by value" v-model="value" />
  </div>
</template>

<style>
.container {
  margin-top: 2rem;
}

.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}

.flex p {
  margin: 1rem;
}

.bold {
  font-weight: 900;
}
</style>
