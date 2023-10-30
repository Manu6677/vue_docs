<script>
import BaseButton from "./components/BaseButton.vue";

export default {
  components: { BaseButton },
  data() {
    return {
      newText: "",
      trackClickTimes: true,

      allText: [
        {
          id: 1,
          title: "First Test",
        },
      ],

      nextItemId: 2,
    };
  },

  methods: {
    addNewText() {
      this.allText.push({
        id: this.nextItemId++,
        title: this.newText,
      });
      this.newText = "";
    },

    firstClick() {
      //   this.copyTextOfParent = this.title;
      //   this.$emit("btnFirstClicked", [this.copyTextOfParent, 1]);

      //   this.trackClickTimes = this.trackClickTimes + 1;

      //   console.log(this.trackClickTimes);
      console.log(this.allText);

      if (this.trackClickTimes == true) {
        alert("Btn Clicked time");
        this.trackClickTimes = false;
      } else if (this.trackClickTimes == false) {
        this.trackClickTimes = true;
        for (let i = 0; i < this.allText.length; i++) {
          this.allText[i].title = this.allText[i].title
            .split("")
            .reverse()
            .join("");
          this.allText.push(this.allText[i].title);
        }
      }

      console.log(this.trackClickTimes);
    },
  },
};
</script>

<template>
  <div>
    <form v-on:submit.prevent="addNewText">
      <label for="newText">Enter New Text: </label>
      <input v-model="newText" placeholder="Enter Something" id="newText" />
      - <button>Add</button>
    </form>
    <BaseButton
      v-for="(item, index) in allText"
      :key="index"
      :title="item.title"
      class="click-btn"
    />
    <button @click="firstClick" class="first-btn">Enter</button>
  </div>
</template>

<style scoped>
.click-btn {
  margin-top: 8px;
}
</style>
