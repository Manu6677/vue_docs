import { createApp } from "vue";
import "./style.css";
import { createStore } from "vuex";
import App from "./App.vue";

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

const store = createStore({
  state() {
    return {
      allTask: [
        {
          id: 1,
          title: "Do Workout",
         
        },
      ],
    };
  },
  mutations: {
    addTaskToList(state, payload) {
      console.log(payload);
      if (!payload) {
        return alert("Invalid Value");
      } else if (payload[2] == true) {
        state.allTask.find((task) => {
          if (task.id === payload[0]) {
            task.title = payload[1];
          }
        });
      } else {
        let nextId = state.allTask.length;
        state.allTask.push({
          id: nextId + 1,
          title: payload,
        });
      }
    },

    delTaskFromList(state, payload) {
      const index = state.allTask.findIndex((task) => task.id == payload);
      console.log(index);
      state.allTask.splice(index, 1);
    },
    editTaskFromList(state, payload) {
      console.log(payload);
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");

// id issue
// empt val issue
