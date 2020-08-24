import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Во время разработки store перестал видеть todos.js ¯＼_(ツ)_/¯ Не понял причину.
const store = () =>
  new Vuex.Store({
    state: {
      list: [{ title: "text1", completed: false, id: Date.now() }, { title: "text3", completed: false, id: Date.now() }, { title: "text2", completed: false, id: Date.now() }]
    },
    mutations: {
      addTodo(state, todo) {
        state.list.push(todo)
      },
      toggle(state, index) {
        state.list[index].completed = !state.list[index].completed;
      },
      get(state, data) {
        state.list = data;
      },
      delete(state, id) {
        state.list = state.list.filter(item => item.id !== id);
      },
    }
  })

export default store