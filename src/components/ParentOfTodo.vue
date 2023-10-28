<script>
import TodoList from "./TodoList.vue";

export default {
  components: { TodoList },
  data() {
    return {
      editedTask: null,
      isEditBtnClicked: true,
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
      //   if (!this.nextTodotext) {
      //     return alert("Please fill field first");
      //   }

      if (this.editedTask === null) {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText,
        });
      } else {
        // console.log(this.todos[this.editedTask].title, "manuedit");
        this.todos[this.editedTask].title = this.newTodoText;
        this.editedTask = null;
      }
      this.newTodoText = "";
    },

    editTaskInTodo(data) {
      // console.log(data);
      // console.log(this.todos[data]);
      // console.log(this.todos[data].title);
      this.newTodoText = this.todos[data].title;
      this.editedTask = data;
    },

    addChangesInTodoFn(data) {
      console.log(data);
      console.log(data[0]);
      console.log(data[1]);
      // this.todos = data[1];
      // console.log(this.todos[data[0]].title);
      this.todos[data[0]].title = data[1];
      this.isEditBtnClicked = true;
    },
    isEditBtnClickedChangedFn(data) {
      console.log(data);
      this.isEditBtnClicked = false;
    },
  },
};
</script>

<template>
  <div>
    <h2>Make Your Todolist</h2>
    <form v-on:submit.prevent="addTaskInTodo">
      <label for="newTodo">Put Task : </label>
      <input v-model="newTodoText" placeholder="type here" id="newTodo" />
      <button>Add</button>
    </form>

    <ul>
      <TodoList
        v-for="(value, index) in todos"
        v-bind:key="value.id"
        :title="value.title"
        :indexNumber="index"
        :isEditBtnClicked="isEditBtnClicked"
        @remove="todos.splice(index, 1)"
        @editTodo="editTaskInTodo($event)"
        @addChangesInTodo="addChangesInTodoFn($event)"
        @isEditBtnClickedChanged="isEditBtnClickedChangedFn($event)"
      >
      </TodoList>
    </ul>
  </div>
</template>

<!-- 
    
Important Notes :
1) To edit todo: what we have done to edit TodoList, we took a index from the child component(TodoList) to parent component via emit method.
     edit method is created and emit is created inside it.
      -> consumed the emit in parent component(ParentOfTodo) 

2) Created the emit method to edit the Todo inside already created input field, from there used editedTask to check we are going to add new value
   -> or is it that we need to edit
    -> again set editesTask variable to null.
    
 -->
