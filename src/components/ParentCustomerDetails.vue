<script>
import ChildCustomerDetails from "./ChildCustomerDetails.vue";
export default {
  components: { ChildCustomerDetails },
  data() {
    return {
      isEditBtnClicked: true,
      newFirstName: "",
      newLastName: "",
      newAddress: "",
      CustomerDetails: [
        {
          id: 1,
          fName: "Kurtis",
          lName: "weissnat",
          add: "Rex Trail",
        },
      ],
      nextCustomerId: 2,
    };
  },
  methods: {
    addDetailsToTable() {
      if (
        this.newFirstName.length == 0 ||
        this.newLastName.length == 0 ||
        this.newAddress.length == 0
      ) {
        return alert("Please fill details");
      }

      //   console.log(this.newFirstName.length);
      this.CustomerDetails.push({
        id: this.nextCustomerId++,
        fName: this.newFirstName,
        lName: this.newLastName,
        add: this.newAddress,
      });
      this.newFirstName = "";
      this.newLastName = "";
      this.newAddress = "";
    },

    removeCustomerData(data) {
      //   console.log(data);
      //   console.log(this.CustomerDetails[data[0]]);
      //console.log(this.CustomerDetails[data[0]].fName);
      this.CustomerDetails.splice(data[0], 1);
    },

    clickedEditBtnNowChangeToFalse(data) {
      // console.log(data);
      this.isEditBtnClicked = false;
    },

    EditCustomerData(data) {
      //   console.log(data);
      //   console.log(data[0]);
      //   console.log(this.CustomerDetails[data[3]].fName);
      //this.CustomerDetails[data[3]].fName = data[0];
      this.CustomerDetails[data[3]].fName = data[0];
      this.CustomerDetails[data[3]].lName = data[1];
      this.CustomerDetails[data[3]].add = data[2];
      this.isEditBtnClicked = true;
    },
  },
};
</script>

<template>
  <div>
    <h1>Customer Details</h1>
    <form v-on:submit.prevent="addDetailsToTable">
      <div class="formTopBar">
        <div class="formTopBarfield">
          <label for="newFirstName">First Name</label>
          <input
            v-model="newFirstName"
            placeholder="EnterFirstName"
            id="newFirstName"
          />
        </div>

        <div class="formTopBarfield">
          <label for="newLastName">Last Name</label>
          <input
            v-model="newLastName"
            placeholder="Enter Last Name"
            id="newLastName"
          />
        </div>

        <div class="formTopBarfield">
          <label for="newAddress">Address</label>
          <input
            v-model="newAddress"
            placeholder="Enter Address"
            id="newAddress"
          />
        </div>
        <button>Add</button>
      </div>
    </form>

    <ChildCustomerDetails
      v-for="(value, index) in CustomerDetails"
      :key="value.id"
      :fName="value.fName"
      :lName="value.lName"
      :add="value.add"
      :isEditBtnClicked="isEditBtnClicked"
      :customerId="value.id"
      :index="index"
      @removeData="removeCustomerData($event)"
      @addEditedChangesOfCustomer="EditCustomerData($event)"
      @clickedEditBtn="clickedEditBtnNowChangeToFalse($event)"
    >
    </ChildCustomerDetails>
  </div>
</template>

<style scoped>
.formTopBar {
  display: flex;
}

.formTopBarfield {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
