import { createStore } from 'vuex';

const store = createStore({
  state: {
    type: '', // CONTEST_TYPE
    contestName: '',
    unit: '', // UNIT_TYPE
    imgBase64: '',
    gameDetail: [
      {
        type: '', // GAME_TYPE
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
    imgBase64Change(state, { img }) {
      state.imgBase64 = img;
    },
  },
});

export default store;
