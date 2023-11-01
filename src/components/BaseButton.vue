<script>
export default {
  props: ["title", "indexNum"],
  data() {
    return {
      isEditClicked: false,
      changedText: "",
    };
  },
  methods: {
    edit() {
      this.isEditClicked = true;
      //   this.$emit("editTitle", [this.title, this.changedText]);
    },
    addChanges() {
      this.$emit("addChanges", [this.title, this.changedText, this.indexNum]);
      this.isEditClicked = false;
    },
  },
};
</script>

<template>
  <div>
    <span class="propsAndBtn">
      <p>{{ title }}</p>

      <input
        v-if="isEditClicked"
        placeholder="Change Here!"
        v-model="changedText"
        @keyup.enter="addChanges"
      />
      <button @click="edit">Edit</button>
    </span>
  </div>
</template>

<style scoped>
.first-btn {
  background-color: #0069d9;
  color: #218838;
}

.propsAndBtn {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
</style>
