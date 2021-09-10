const state = {
  main: {
    name: localStorage.getItem('nick'),
    position: localStorage.getItem('cargo'),
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  }
}

const mutations = {

}

export default {
  state,
  mutations
}
