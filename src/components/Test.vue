<script>
export default {
  data() {
    return {
      message: "",
      date: true,
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
  },
};
</script>

<template>
  <div>
    <h3>Type here Dude</h3>
    <span>
      <input v-model="message" placeholder="type here" />
      -- <span><button @click="clear">Clear</button></span> --<span>
        <button @click="capitalLetter()">Make in capital</button></span
      >
    </span>
    <p>{{ message }}</p>

    <p>{{ date }}</p>
  </div>
</template>
