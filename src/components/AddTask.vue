<script>
import History from "./HistoryTask.vue";
import { mapMutations, mapState } from "vuex";
// import store from "vuex"
export default {
  components: { History },
  methods: {},
  data() {
    return {
   
      isEditBtnClickParent: "",
      editedId: "",
      isEditedValue: false,
      value: "",
    };
  },
  methods: {
    ...mapMutations(["addTaskToList"]),

    addTaskToListMiddleFn(value) {
      if (this.isEditedValue) {
        this.$store.commit("addTaskToList", [
          parseInt(this.editedId),
          this.value,
          true,
        ]);
        this.isEditBtnClickParent = false
        this.isEditedValue = false;
        this.value = "";

        this.isEditBtnClickParent = false;
      } else {
        this.$store.commit("addTaskToList", this.value);
        this.value = "";
      }
    },
    editDataInInput({title, id, isEditBtnClicked}) {
    //   console.log(title, id, isEditBtnClicked)
    this.isEditBtnClickParent = isEditBtnClicked
       this.editedId = id
       this.value = title
      this.isEditedValue = true;
    },
  },
  computed: {
    ...mapState(["allTask"]),
  },
};
</script>

<template>
  <div>
    <h3 class="container">Add Task</h3>
    <div class="addtask">
      <label for="task">Enter Task: </label>
      <input
        type="text"
        placeholder="Type here"
        id="task"
        v-model="value"
        @keyup.enter="addTaskToListMiddleFn"
      />

      <button @click="addTaskToListMiddleFn(value)">Add</button>
    </div>

    <!-- <History @idOfData="editDataInInput($event)" :isEditBtnClickParent="isEditBtnClickParent"/> -->
    <h3>History of task</h3>
    <History v-for="item in allTask" :key="item.id" :id="item.id" :title="item.title" :isEditBtnClickParent="isEditBtnClickParent" @idOfData="editDataInInput" />
  </div>
</template>

<style>
.addtask button {
  margin-left: 15px;
}
</style>
