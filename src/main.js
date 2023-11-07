import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faXmark } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faXmark);

// createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "allAnimalsCatalogue",
  reducer: (state) => ({ allAnimals: state.allAnimals }),
});

const store = createStore({
  state() {
    return {
      allAnimals: [
        {
          id: 1,
          title: "Lion",
          imgPath:
            "blob:http://localhost:5173/f8486140-5f82-4014-837f-438502b8e5ab",
        },
      ],
    };
  },

  mutations: {
    addAnimalToList(state, payload) {
      // console.log(payload);
      let nextId = state.allAnimals.length;
      state.allAnimals.push({
        id: nextId + 1,
        title: payload.name,
        imgPath: payload.imgUrl,
      });
    },

    delAnimalFromList(state, payload) {
      // console.log(payload, "del");
      const index = state.allAnimals.findIndex(
        (animal) => animal.id === payload
      );
      // console.log(index);
      state.allAnimals.splice(index, 1);
    },
  },
  plugins: [vuexLocal.plugin],
});

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.mount("#app");
