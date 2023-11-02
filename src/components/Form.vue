<script>
import Table from "./Table.vue";
export default {
  components: { Table },
  data() {
    return {
      email: "",
      name: "",
      dateOfBirth: "",
      password: "",
      matchPassword: "",
      isCheckBox: false,
      isActive: false,
      filledData: [
        {
          id: 1,
          email: "test@gmail.com",
          name: "test",
          dob: "2005-5-14",
          password: 123,
          matchPassword: 123,
        },
        {
          id: 2,
          email: "test@gmail.com",
          name: "test",
          dob: "1995-5-14",
          password: 123,
          matchPassword: 123,
        },

        {
          
          id: 3,
          email: "test@gmail.com",
          name: "test",
          dob: "2007-5-14",
          password: 123,
          matchPassword: 123,
        } 


      ],
      idOfUser: 1,
    };
  },
  methods: {
    submitData() {

      if (
        this.email.length < 1 ||
        this.name.length < 1 ||
        this.dateOfBirth.length < 1 ||
        this.password.length < 1 ||
        this.matchPassword.length < 1
      ) {
        return alert("enter all fields");
        return;
      }
      if (this.password != this.matchPassword) {
        console.log(this.password);
        console.log(this.matchPassword);
        return alert("Password Mismatch");
      }

        this.filledData.push({
        id: this.idOfUser++,
        email: this.email,
        name: this.name,
        dob: this.dateOfBirth,
        password: this.password,
        matchPassword: this.matchPassword,
      });

      this.email = "";
      this.name = "";
      this.dateOfBirth = "";
      this.password = "";
      this.matchPassword = "";
      this.isActive = false

    },
    checkBoxClick() {
      this.isCheckBox = true;
    },
    popUpModal(){
      console.log(this.isActive)
      this.isActive = true
      console.log(this.isActive)
    },
    delUserData(userId){
      // console.log(userId)
      this.filledData = this.filledData.filter(({id})=> id != userId)
    },
    editDataInTable(data){
      console.log(data)
      if(data[1] != ""){
      this.filledData[data[0]].email = data[1];
      }

      if(data[2] != ""){
      this.filledData[data[0]].name = data[2];
      }

      if(data[3] != ""){
      this.filledData[data[0]].dob = data[3];
      }
    },
    sortDataByDobUp(){
     this.filledData = this.filledData.sort(function(a, b){
        return   new Date(a.dob) - new Date(b.dob)
      })
    },
    sortDataByDobDown(){
        this.filledData = this.filledData.sort(function(a, b){
        return   new Date(b.dob) - new Date(a.dob)
      })
    }
  },
};
</script>

<template>
  <div class="modal-view">
    <div :class="isActive ? 'activate': 'deactivate'">
      <h3 class="title-of-form">Enter Your Details !</h3>
     
      <div class="form">
        <form v-on:submit.prevent="submitForm">
          <div class="formfield">
            <label class="form-placeholder-email" for="email">Email: </label>
            <input placeholder="email" id="email" v-model="email" />
          </div>

          <div class="formfield">
            <label class="form-placeholder-name" for="name">Name: </label>
            <input placeholder="name" id="name" v-model="name" />
          </div>

          <div class="formfield">
            <label class="form-placeholder-dob" for="dateOfBirth">Date Of Birth: </label>
            <input placeholder="DOB" type="date" id="dateOfBirth" v-model="dateOfBirth" />
          </div>

          <div class="formfield">
            <label class="form-placeholder-pass" for="password">Password: </label>
            <input
              placeholder="password"
              type="text"
              id="password"
              v-model="password"
            />
          </div>

          <div class="formfield">
            <label class="form-placeholder-con-pass" for="matchPassword">Confirm Password: </label>
            <input
              placeholder="Enter same password"
              id="matchPassword"
              type="text"
              v-model="matchPassword"
            />
          </div>

          <div class="checkbox">
            <span class="span-checkbox-para">
              <input type="checkbox" @click="checkBoxClick" />
              <p>Accept all term and conditions</p>
            </span>
          </div>

          <button @click="submitData" :disabled="!isCheckBox">Submit</button>
        </form>
      </div>
    </div>

    <div class="table-comp">
      <div>
        <table class="table-form">
          <tr class="table-row-form">
            <!-- <th class="table-head-form">Id</th> -->
            <th class="table-head-form">Email</th>
            <th class="table-head-form">Name</th>
            <th class="table-head-form">D.O.B <span class="icon-up-down"><font-awesome-icon icon="fa-solid fa-caret-up" @click="sortDataByDobUp" /><font-awesome-icon icon="fa-solid fa-caret-down" @click="sortDataByDobDown"/></span></th>
            <th class="table-head-form">Action</th>

          </tr>
        </table>

        <Table
          v-for="(item, index) in filledData"
          :key="item.id"
          :id="item.id"
          :email="item.email"
          :name="item.name"
          :dob="item.dob"
          :password="item.password"
          :matchPassword="item.password"
          :index="index"
          @delUser="delUserData($event)"
          @editInTable="editDataInTable($event)"
        />
      </div>
    </div>
  <span class="addUser-sort-btn">
  <button @click="popUpModal">Add user details</button>
  <button @click="sortDataByDob">sort by DOB</button>
  </span>

  </div>
</template>

<style>

.icon-up-down{
  margin-left: 5px;
}

.addUser-sort-btn{
  display: flex;
  justify-content: space-around
}

.formfield {
  margin: 30px;
  text-align: left;
}

.modal-view{
  position: relative;
  z-index: 0;
}

.form-placeholder-dob{
  padding-right: 36px;
   
}

.form-placeholder-pass{
   padding-right: 60px;
   
}

.form-placeholder-name{
  padding-right: 85px;
  
}

.form-placeholder-email{
  padding-right: 85px;

}

.activate{
  display: block;
  top: 0;
  left: -100px;
  position: absolute;
  z-index: 10;
  height: 520px;
  width: 500px;
  border-radius: 10px;
  background-color: gray;
  margin-left: 370px;
  margin-top: 20px;
}

.deactivate{
  display: none;
}

.form {
  margin-top: 50px;
  border-radius: 30px;
  height: 420px;
  display: flex;
  text-align: center;
  justify-content: center;
}

.title-of-form {
  margin-top: 20px;
}

.span-checkbox-para {
  display: flex;
  justify-content: center;
}

.table-comp {
  margin: 10px;
}

.table-form {
  border: 1px solid whitesmoke;
  border-radius: 10px;
}

.table-row-form {
  width: 320px;
}
.table-head-form {
  width: 200px;
}
</style>
