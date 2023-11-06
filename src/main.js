import { createApp } from "vue";
import "./style.css";
import { createStore } from "vuex";
import App from "./App.vue";
import VuexPersistence from "vuex-persist";

// const store = createStore({
//     state() {
//         return {
//             counter: 101,
//             history: [1]
//         }
//     },
//     //Mutation never contain asynchornous code it will have only "Synchronous code"
//     mutations: {
//         addToCounter(state, payload) {
//             state.counter = state.counter + payload;
//             state.history.push(state.counter)
//         },
//         delFromCounter(state, payload) {
//             state.counter = state.counter - payload
//             state.history.push(state.counter)
//         }
//     },
//     actions: {
//         async addRandomToCounter(context) {
//             // console.log(context)
//             let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
//             // console.log(context);
//             // console.log(data);
//             context.commit("addToCounter", data.data);
//         }
//     },
//     //==> It is used to get the state by in a bit manipulative form
//     //   -> It takes data in one fn in another fn takes payload
//     getters: {
//         activeIndexes: (state) => (payload) => {
//             let indexes = [];
//             state.history.forEach((number, index) => {
//                 if (number === payload) {
//                     indexes.push(index)
//                 }
//             });
//             return indexes
//         }
//     }
// })

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'userTask',
  storage: window.localStorage,
  reducer: (state) => ( {allTask: state.allTask} ),
  // filter: (mutation) => mutation.type === "addTaskToList",
});


const store = createStore({
  state() {
    return {
      allTask: [
        {
          id: 1,
          title: "Do Workout",
          isEdited: false,
        },
      ],
    };
  },
  mutations: {
    addTaskToList(state, payload) {
      if (!payload) {
        return alert("Invalid Value");
      } else if (payload[2] == true) {
        state.allTask.find((task) => {
          if (task.id === payload[0]) {
            task.title = payload[1];
            task.isEdited = false;
          }
        });
      } else {
        let nextId = state.allTask.length;
        state.allTask.push({
          id: nextId + 1,
          title: payload,
          isEdited: false,
        });
      }
    },

    delTaskFromList(state, payload) {
      const index = state.allTask.findIndex((task) => task.id == payload);
      console.log(index);
      state.allTask.splice(index, 1);
    },

    editButton(state, id) {
      console.log(id);
      state.allTask.find((task) => {
        if (task.id === id) {
          task.isEdited = true;
        }
      });
    },
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
  },
  plugins: [vuexLocal.plugin],
});

const app = createApp(App);
app.use(store);
app.mount("#app");

// id issue
// empt val issue
