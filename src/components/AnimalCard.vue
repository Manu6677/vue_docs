<script>
import { mapMutations } from "vuex";
export default {
  props: ["animal", "img"],
  methods: {},
  data() {
    return {
      imgUrL: this.animal.imgPath,
      
    };
  },

  methods: {
    ...mapMutations(["delAnimalFromList"]),

    delCardMiddleFn(id) {
      // console.log(this.imgUrL)
      // console.log(id);
      this.$store.commit("delAnimalFromList", id);
    },
  },
};
</script>
<template>
  <div class="">
    <div class="card">
      <div class="crossIcon">
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="closeBtn"
          @click="delCardMiddleFn(animal.id)"
        />
      </div>
      <div class="imgHere">
        <img :src="imgUrL" alt="noImg" style="width: 190px; height: 160px; border-radius: 10px"/>
      </div>
      <div class="title">{{ animal.title }}</div>
    </div>
  </div>
</template>

<style scoped>

.imgHere{
  border: 1px solid white;
  width: 180px;
  height: 153px;
}

.allCards {
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid white;
}

.imgHere {
  width: 190px;
  margin-left: -24px;
  height: 70px;
  margin-top: -25px;
  height: 160px;
  display: flex;
  background-color: #a9a9a9;
  border-radius: 10px;
  justify-content: center;
}

.title {
  border-radius: 10px;
  width: 150px;
  text-align: center;
  height: 40px;
  color: whitesmoke;
  background-color: #303030;
  font-weight: bold;
  margin-top: 10px;
}

.card {
  align-content: center;
  border-radius: 15px;
  width: 140px;
  height: 150px;
  margin-left: 10px;
  margin-right: 10px;
}

.crossIcon {
  margin-top: -4px;
  z-index: 50;
  cursor: pointer;
  margin-left: 150px;
}
.closeBtn {
  height: 20px;
}
</style>
