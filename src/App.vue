<script>
import FancyList from "./components/FancyList.vue";

export default {
  components: {
    FancyList,
  },

  data() {
    return {
      bookData: [
        { body: "Scoped Slots Guide", username: "Evan You", likes: 20 },
        { body: "Vue Tutorial", username: "Natalia Tepluhina", likes: 10 },
      ],
    };
  },
};
</script>

<template>
  <FancyList v-for="(item, index) in bookData" :key="index">
    <template #nameUser>
      {{ item.username }}
    </template>

    <template #books>
      {{ item.body }}
    </template>

    <template #likes>
      {{ item.likes }}
    </template>
  </FancyList>
</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
