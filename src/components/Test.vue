<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>

<template>
  <div>
    <h3>Type here Dude</h3>
    <input v-model="message" placeholder="type here" />
    <p>{{ message }}</p>
  </div>
</template>
