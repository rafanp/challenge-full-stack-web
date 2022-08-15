import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  student: {},
  students: [],
};

const getters = {
  students: function (state) {
    return state.students;
  },
  student: function (state) {
    return state.student;
  },
};

const actions = {
  async getStudents({ commit }) {
    try {
      const response = await fetch('http://localhost:3333/students');
      const data = await response.json();
      commit('setStudents', data);
    } catch (error) {
      console.error(error);
    }
  },

  async deleteStudent({ commit }, { id }) {
    console.log('commit', commit);
    try {
      const response = await fetch(`http://localhost:3333/students/${id}`, {
        method: 'DELETE',
      });
      console.log(response);
      return response;
      // this.getStudents();
    } catch (error) {
      console.error(error);
    }
  },

  async getStudent({ commit }, { id }) {
    try {
      const response = await fetch(`http://localhost:3333/students/${id}`);
      const data = await response.json();
      commit('setStudent', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async createStudent({ commit }, { payload }) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    const response = await fetch(
      'http://localhost:3333/students',
      requestOptions
    );
    console.log('Commit', commit);

    return response;
  },

  async updateStudent({ commit }, { payload }) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      };

      console.log('Commit', commit);

      const response = await fetch(
        `http://localhost:3333/students/${payload.id}`,
        requestOptions
      );

      if (response.status === 404) {
        throw new Error(response.statusText);
      }

      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};

const mutations = {
  setStudents(state, payload) {
    state.students = payload;
  },

  setStudent(state, payload) {
    state.student = payload;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
