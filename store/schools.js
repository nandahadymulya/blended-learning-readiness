export const state = () => ({
  list: [],
})

export const getters = {
  list: (state) => state.list,
}

export const mutations = {
  setList(state, param) {
    state.list = param
  },
}

export const actions = {
  async fetchList(store) {
    try {
      const response = await this.$axios.get('category')
      store.commit('setList', response.data.result)
    } catch (error) {
      console.log('error: ', error)
    }
  },
}
