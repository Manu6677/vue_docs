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
    };
  },
  methods: {
    addTaskInTodo() {
      this.todos.push({
        title: this.newTodoText,
      });

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
        v-for="value in todos"
        v-bind:key="value.id"
        :title="value.title"
      >
      </TodoList>
    </ul>
  </div>
</template>
