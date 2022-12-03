import { createStore } from 'vuex';

const store = createStore({
  state: {
    type: '', // CONTEST_TYPE
    contestName: '',
    unit: '', // UNIT_TYPE
    logoImg: '',
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
});

export default store;
