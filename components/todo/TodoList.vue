<template>
  <div class="list">
    <v-card>
      <v-toolbar color="cyan">
        <v-toolbar-title>Todo List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="titleNewTodo"
          @keyup.enter="addTodo"
          hide-details="true"
          label="Add task"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn @click="addTodo" small>Add</v-btn>
      </v-toolbar>
      <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Completed</th>
              <th class="text-left">Task</th>
              <th class="text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            <TodoItem
              v-for="(todo, index) of todos"
              v-bind:todo="todo"
              v-bind:index="index"
              v-bind:key="index"
            />
          </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import TodoItem from "@/components/todo/TodoItem";

export default {
  components: { TodoItem },
  data() {
    return {
      titleNewTodo: ""
    };
  },
  computed: {
    todos() {
      return this.$store.state.list;
    }
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.titleNewTodo,
        completed: false,
        id: Date.now()
      };
      this.$store.commit("addTodo", newTodo);
      this.titleNewTodo = "";
    }
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(json => {
        this.$store.commit("get", json || []);
      });
  }
};
</script>

<style lang="sass">
.list
  display: flex
  justify-content: center

.mx-auto
  width: 900px
</style>