<script>
export default {
  props: ["fName", "lName", "add", "customerId", "index", "isEditBtnClicked"],

  data() {
    return {
      editFName: "",
      editLName: "",
      editAdd: "",
      isInputFieldVisible: false,
      isRed: false,
    };
  },
  methods: {
    remove() {
      this.$emit("removeData", [this.index, this.customerId]);
    },
    edit() {
      this.editFName = this.fName;
      this.editLName = this.lName;
      this.editAdd = this.add;
      this.isInputFieldVisible = true;
      this.$emit("clickedEditBtn", this.isEditBtnClicked);
    },
    addEditedChanges() {
      this.$emit("addEditedChangesOfCustomer", [
        this.editFName,
        this.editLName,
        this.editAdd,
        this.index,
        this.customerId,
        (this.isInputFieldVisible = false),
      ]);
    },
  },
};
</script>

<template>
  <div class="customerDetailsBox" :class="{ red: isRed }">
    <!-- {{ isEditBtnClicked }} -->
    <table class="tableborder">
      <tr class="tablerow">
        <td class="tableData">
          <span>
            <td class="" v-if="!isInputFieldVisible">{{ fName }}</td>
            <input
              v-if="isInputFieldVisible"
              type="text"
              v-model="editFName"
              @keyup.enter="addEditedChanges"
            />
          </span>
        </td>

        <td class="tableData">
          <span>
            <td class="" v-if="!isInputFieldVisible">{{ lName }}</td>
            <input
              v-if="isInputFieldVisible"
              type="text"
              v-model="editLName"
              @keyup.enter="addEditedChanges"
            />
          </span>
        </td>

        <!-- <td class="tableData">{{ lName }}</td> -->

        <td class="tableData">
          <span>
            <td class="" v-if="!isInputFieldVisible">{{ add }}</td>
            <input
              v-if="isInputFieldVisible"
              type="text"
              v-model="editAdd"
              @keyup.enter="addEditedChanges"
            />
          </span>
        </td>
        <!-- <td class="tableData">{{ add }}</td> -->

        <td class="tableData">
          <span class="">
            <td class="" @click="remove"><button>Del</button></td>
            <td class="" @click="edit">
              <button :disabled="isEditBtnClicked == false">Edit</button>
            </td>
          </span>
        </td>

        <!-- <td class="tableDataCheckbox"><input type="checkbox" /></td> -->
        <td class="tableDataCheckbox">
          <input type="checkbox" v-model="isRed" />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.customerDetailsBox {
  margin-top: 15px;
  margin-left: 15px;
}

.tableborder {
  border: 1px solid white;
  width: 800px;
}
.tableData {
  text-align: left;
  padding-left: 5px;
  border: 1px solid white;
  width: 50px;
}
.tableDataBtn {
  text-align: left;
  padding-left: 5px;
  border: 1px solid white;
  width: 50px;
  text-align: center;
}
.tableDataCheckbox {
  text-align: left;
  padding-left: 5px;
  border: 1px solid white;
  width: 50px;
  text-align: center;
}

.red {
  color: red;
}
</style>
