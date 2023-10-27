<script>
export default {
  props: ["title", "indexNumber"],
  emits: ["remove", "editTodo"],

  methods: {
    edit() {
      this.$emit("editTodo", this.indexNumber);
    },
  },
};
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ indexNumber }}</h2>
    <button @click="$emit('remove')">Del</button>
    <!-- <button @click="$emit('edit')">Edit</button> -->
    <button @click="edit">Edit</button>
  </div>
</template>
