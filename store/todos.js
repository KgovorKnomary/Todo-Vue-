export const state = () => ({
  list: [{title:"text1", completed:false, id: Date.now()}, {title:"text3", completed:false, id: Date.now()}, {title:"text2", completed:false, id: Date.now()}]
})

export const mutations = {
  addTodo(state, title) {
    state.list.push({
      title: title,
      completed: false,
      id: Date.now(),
    })
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