<script>
export default {
  data() {
    return {
      name: "Manu Abhishek",
      color_value: "red",
      colorsArr: ["red", "yellow", "black", "orange", "pink"],
    };
  },
  methods: {},
};
</script>

<template>
  <div>
    <h2 :style="{ color: color_value }">{{ name }} - {{ color_value }}</h2>

    <!-- THERE ARE TWO WAYS TO BIND ONE BY SIMPLE OPTION AND OTHER BY LOOPING WITH v-for -->
    <!-- Here i simply used the string value instead of binding for binding write
          :value instead of value
 -->

    <select v-model="color_value">
      <!-- <option disabled value="">Please select one</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="yellow">yellow</option> -->

      <option v-for="(item, index) in colorsArr" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>
