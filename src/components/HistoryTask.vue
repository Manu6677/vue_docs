<script>
import {  mapMutations } from "vuex";
import store from "vuex";
export default {
  props: ["id", "title", "isEditBtnClickParent"],
  methods: {},
  data() {
    return {
      isEditBtnClicked: false,      
    };
  },
  watch: {
    isEditBtnClickParent() {
      this.isEditBtnClicked = this.isEditBtnClickParent;
      console.log(this.isEditBtnClicked);
    },
  },

  methods: {
    ...mapMutations(["editTaskFromList", "delTaskFromList"]),

    delTaskFromListMiddleFn(id) {
      this.$store.commit("delTaskFromList", id);
    },

    editTaskFromListMiddleFn(title, id) {
      console.log(title);
      console.log(id);
     this.isEditBtnClicked = true
      this.$emit("idOfData", {title, id, isEditBtnClicked :  this.isEditBtnClicked});
    },
  },
};
</script>
<template>
  <div>
    <div class="all-history-inside">
      <div class="itemList">
        <ul>
          <span class="title-btn">
            <div class="title">
              <h4 class="">{{ title }}</h4>
            </div>
            <div class="btn">
              <button
                class="btnEdit"
                @click="editTaskFromListMiddleFn(title, id)"
                :disabled="isEditBtnClicked"
              >
                Edit
              </button>
              <button class="btnDel" @click="delTaskFromListMiddleFn(id)">
                Del
              </button>
            </div>
          </span>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.addtask button {
  margin-left: 15px;
}
.itemList {
  align-items: center;
  margin-right: 45px;
}

.all-history-inside {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 150px;
}

.btnEdit {
  margin-right: 10px;
}

.title-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  width: 120px;
  display: flex;
  flex-wrap: wrap;
}
</style>
