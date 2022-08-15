const mutations = {
  setStudents(state, payload) {
    state.students = payload;
  },

  setStudent(state, payload) {
    state.student = payload;
  },
};

export default mutations;
