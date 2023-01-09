import { createStore } from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

const store = createStore({
  state: {
    type: '', // CONTEST_TYPE
    contestName: '',
    unit: '', // UNIT_TYPE
    mode: '', //CONTEST_MODE
    imgBase64: '',
    count: 0,
    gameDetail: [
      {
        gameName: '',
        count_Q: 0,
        count_q: 0,
        teamCount: 0,
        track: 0,
      },
    ],
    teamInfo: [
      {
        name: '',
        id: '',
        member: [],
      },
    ],
    contestInfo: [
      {
        date: new Date(),
        time: '',
        place: '',
      },
    ],
    scoreInfo: [
      [
        {
          teamId: '',
          score: '',
          is_Q: false,
          is_q: false,
        },
      ],
    ],
  },
  mutations: {
    updateField,
    imgBase64Change(state, { img }) {
      state.imgBase64 = img;
    },
  },
  getters: {
    getField,
  },
});

export default store;
