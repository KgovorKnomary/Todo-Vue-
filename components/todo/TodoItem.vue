<template>
  <tr>
    <td>
      <input @change="onCompleted" type="checkbox" :checked="todo.completed" />
    </td>
    <td :class="{ completed: todo.completed }">{{ todo.title }}</td>
    <td>
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn @click="deleteTodo" small>Delete</v-btn>
        </div>
      </v-col>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    deleteTodo() {
      this.$store.commit("delete", this.todo.id);
    },
    onCompleted() {
      this.$store.commit("toggle", this.index);
    }
  }
};
</script>

<style lang="sass">
.completed
  text-decoration: line-through
</style>