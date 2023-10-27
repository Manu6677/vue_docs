<script>
export default {
  data() {
    return {
      message: "",
      date: "",
      name: "Manu",
      isRed: false,
    };
  },
  created() {
    console.log("created");
    this.date = new Date();
  },

  mounted() {
    console.log("mounted");
    this.date = new Date();
  },

  updated() {
    console.log("updated");
    // this.date = new Date();
  },

  destroyed() {
    console.log("destroyed");
    this.date = new Date();
  },
  methods: {
    clear() {
      this.message = " ";
    },
    capitalLetter() {
      this.message = this.message.toUpperCase();
    },
    red() {
      console.log(this.isRed, "redwala");
      // this.isRed = this.redbox === "yes"
    },
  },
};
</script>

<template>
  <div>
    <h3>Type here Dude</h3>
    <span>
      <input v-model="message" placeholder="type here" />
      -- <span><button @click="clear">Clear</button></span> --<span>
        <button @click="capitalLetter">Make in capital</button></span
      >
    </span>
    <p>{{ message }}</p>

    <p>{{ date }}</p>

    <div :class="{ red: isRed }">{{ name }} Class Test</div>
    <input :checked="isRed" v-model="isRed" type="checkbox" @click="red" /> Red
    <!-- Vue Checkbox Checked: The “checked” attribute is used to determine whether a checkbox is selected or not. -->
  </div>
</template>

<style>
.red {
  color: red;
}
</style>
