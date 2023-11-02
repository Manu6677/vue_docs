<script>
export default {
  props: ["id", "email", "name", "dob", "password", "matchPassword", "index"],
  data() {
    return {
        isInputFieldVisible: false,
        editEmail: "",
        editName: "",
        editDob: "",
        editPassword: "",
        editMatchPassword: ""
    };
  },
  methods: {
    del(){
        this.$emit("delUser", this.id)
    },
    edit(){
        this.isInputFieldVisible = true
        this.$emit("editUser", this.id)
    },
    addEditedChanges(){
        this.$emit("editInTable", [this.index, this.editEmail, this.editName, this.editDob])
        this.isInputFieldVisible = false
    }
  },
};
</script>

<template>
  <div>
    <div class="tableborder">
      <tr class="table-row">
      <!-- <td class="table-data">{{id}}</td>| -->
      <td class="table-data">      
       <span>
            <td class="" v-if="!isInputFieldVisible">{{ email }}</td>
            <input
              v-if="isInputFieldVisible"
              type="text"
              v-model="editEmail"
              @keyup.enter="addEditedChanges"
            />
          </span>

      </td>|

      <!-- <td class="table-data"> {{name}}</td>| -->
       <td class="table-data">      
       <span>
            <td class="" v-if="!isInputFieldVisible">{{ name }}</td>
            <input
              v-if="isInputFieldVisible"
              type="text"
              v-model="editName"
              @keyup.enter="addEditedChanges"
            />
          </span>

      </td>|

      <!-- <td class="table-data"> {{dob}}</td>| -->
      <td class="table-data">      
       <span>
            <td class="" v-if="!isInputFieldVisible">{{ dob }}</td>
            <input
              v-if="isInputFieldVisible"
              type="text"
              v-model="editDob"
              @keyup.enter="addEditedChanges"
            />
          </span>

      </td>|


      <td class="table-data"> 
      <button class="btn-edit" @click="edit"> Edit </button>
      <button class="btn-del" @click="del"> Del </button>
      </td>
      </tr>      
    </div>
  </div>
</template>

<style scoped> 
.tableborder{
  border: 1px solid whitesmoke;
  border-radius: 10px;
}

.btn-edit{
    height: 40px;
}

.btn-del{
    height: 40px;
}

.table-row{
    text-align: left;
    width: 300px;
}
.table-data{
    width: 200px;
    text-align: center;
}
</style>
