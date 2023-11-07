<script>
import AnimalCard from "./AnimalCard.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: { AnimalCard },
  data() {
    return {
      animalName: "",
      isActive: false,
      selectedImage: null,
    };
  },
  methods: {
    ...mapMutations(["addAnimalToList"]),

    displaySelectedImage(event) {
      // console.log(event)
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
      }
      // console.log(file, "img")
      // console.log(this.selectedImage, "selectedImage")
    },

    addDetailsInStoreMiddleFn(event) {
      if (this.animalName.length < 1) {
        console.log("inside if");
        return alert("Please Enter all Fields");
      } else {
        this.$store.commit("addAnimalToList", {
          name: this.animalName,
          imgUrl: this.selectedImage,
        });
        this.animalName = "";
        this.isActive = false;
      }
    },
    closeModal() {
      this.isActive = false;
    },
    addAnimal() {
      this.isActive = true;
    },
  },
  computed: {
    ...mapState(["allAnimals"]),
  },
};
</script>
<template>
  <div class="allTemplate">
    <div class="headerOfAnimalForm">
      <p class="tagLine">Animals of Kingdom</p>
      <button class="btnCreate" @click="addAnimal">Create</button>
    </div>

    <div class="formOfAnimal" :class="isActive ? 'activate' : 'deactivate'">
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        class="closeBtn"
        @click="closeModal"
      />

      <h2>Your Animal Data</h2>

      <form v-on:submit.prevent="addDetailsInStoreMiddleFn">
        <div class="formFieldName">
          <label for="animalName">Name: </label>
          <input
            id="animalName"
            v-model="animalName"
            placeholder="type here"
            type="text"
          />
        </div>

        <div class="formFieldImg">
          <label for="animalImg">Img: </label>
          <input
            id="animalImg"
            type="file"
            accept="image/*"
            @change="displaySelectedImage"
          />
        </div>

        <div class="btnSubmit">
          <button>Submit</button>
        </div>
      </form>
    </div>
    <div class="allCards">
      <AnimalCard
        v-for="animal in allAnimals"
        :key="animal.id"
        :animal="animal"
        :img="selectedImage"
      />
    </div>
  </div>
</template>

<style scoped>
.allTemplate {
  position: relative;
  z-index: 0;
}

.allCards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;
}

.activate {
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

.deactivate {
  display: none;
}

.closeBtn {
  margin-left: 460px;
  font-size: 35px;
  cursor: pointer;
}

.headerOfAnimalForm {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btnSubmit {
  margin: 20px;
}
.formFieldImg {
  margin: 35px;
  margin-left: 100px;
}

.formOfAnimal {
  margin-top: 60px;
  border: 1px solid whitesmoke;
  align-items: center;
  background: #909090;
  height: 300px;
  width: 500px;
  border-radius: 30px;
  margin-left: 120px;
}

.tagLine {
  margin-right: 150px;
  font-weight: bold;
}

.btnCreate {
  margin-left: 150px;
}
</style>
