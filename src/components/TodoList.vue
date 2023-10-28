<script>
export default {
  props: ["title", "indexNumber", "isEditBtnClicked"],
  emits: ["remove", "editTodo", "addChangesInTodo", "isEditBtnClickedChanged"],

  data() {
    return {
      changeText: "",
      checkEditClicked: false,
      isTitlePropVisible: true,
    };
  },

  methods: {
    edit() {
      this.$emit("editTodo", this.indexNumber);
    },
    editTitle() {
      this.changeText = this.title;
      this.checkEditClicked = true;
      this.$emit("isEditBtnClickedChanged", this.isEditBtnClicked);
      this.isTitlePropVisible = false;
    },
    addChanges() {
      this.$emit("addChangesInTodo", [this.indexNumber, this.changeText]);
      this.checkEditClicked = false;
      this.isTitlePropVisible = true;
    },
  },
};
</script>

<template>
  <div>
    <div class="item">
      <span>
        <p v-if="isTitlePropVisible">{{ title }}</p>
        <div v-if="checkEditClicked">
          <input
            v-model="changeText"
            placeholder="edit here"
            @keyup.enter="addChanges"
          />
        </div>
      </span>
    </div>
    <button @click="$emit('remove')">Del</button> -
    <!-- <button @click="edit">Edit</button> -->
    <button :disabled="isEditBtnClicked === false" @click="editTitle">
      Edit
    </button>
  </div>
</template>

<style scoped>
.item {
  margin: 10px 15px;
}
</style>
