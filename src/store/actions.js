import studentsService from '@/services/students';

const actions = {
  async getStudents({ commit }) {
    try {
      const response = await studentsService.get();
      commit('setStudents', response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async deleteStudent({ commit }, { id }) {
    console.log('commit', commit);
    try {
      return studentsService.delete(id);
    } catch (error) {
      console.error(error);
    }
  },

  async getStudent({ commit }, { id }) {
    try {
      const response = studentsService.getById(id);
      const data = await response.json();
      commit('setStudent', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async createStudent({ commit }, { payload }) {
    const response = studentsService.post(payload);
    console.log('Commit', commit);

    return response;
  },

  async updateStudent({ commit }, { payload }) {
    try {
      console.log('Commit', commit);

      const response = studentsService.put(payload);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async clearStudent({ commit }) {
    commit('setStudent', {});
  },
};

export default actions;
