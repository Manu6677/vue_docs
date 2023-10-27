<script>
import TodoList from "./TodoList.vue";

export default {
  components: { TodoList },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Lord of Rings",
        },
        {
          id: 2,
          title: "Burning Kingdom",
        },
      ],
      nextTodoId: 3,
    };
  },
  methods: {
    addTaskInTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      console.log(this.todos.id);
      this.newTodoText = "";
    },
  },
};
</script>

<template>
  <div>
    <h2>Make you Todo list</h2>
    <form v-on:submit.prevent="addTaskInTodo">
      <label for="newTodo">Put Tasks : </label>
      <input v-model="newTodoText" placeholder="type here" id="newTodo" />
      <button>Add</button>
    </form>

    <ul>
      <TodoList
        v-for="(value, index) in todos"
        v-bind:key="value.id"
        :title="value.title"
        @remove="todos.splice(index, 1)"
      >
      </TodoList>
    </ul>
  </div>
</template>
