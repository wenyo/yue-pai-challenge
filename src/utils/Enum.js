export const CONTEST_TYPE = {
  TRACK: {
    eng: 'Track',
    ch: '競賽',
    id: 'TRACK',
  },
  FIELD: {
    eng: 'Field',
    ch: '田賽',
    id: 'FIELD',
  },
};

export const CONTEST_VALUE = Object.keys(CONTEST_TYPE).map((key) => CONTEST_TYPE[key].id);

export const UNIT_TYPE = {
  TIME: {
    ch: '時間',
    id: 'TIME',
  },
  DISTANCE: {
    ch: '距離',
    id: 'DISTANCE',
  },
};

export const GAME_TYPE = {};
export const CONTEST_MODE = {
  INDIVIDUAL: {
    ch: '個人',
    id: 2,
  },
  GROUP: {
    ch: '團體',
    id: 1,
  },
};

export const NO_SCORE = '';
export const NO_ID = -1;
export const NO_PLAYER = 'none';
export const GROUP_DEFAULT = 1;

export const ROUND = { ONE: 1 };
export const ROUND_IDX = { ONE: 0, TWO: 1 };

export const CONTEST_INFO_DEFAULT = { WIN: [], LOSE: [], ROUND: [] };

export const TEAM_FORM = {
  id: '',
  name: '',
};

export const GAME_FORM = {};

export const BUTTON_TYPE = {
  MASTER: 'master',
  SECOND: 'second',
  THIRD: 'third',
  FORTH: 'forth',
  FIVE: 'five',
  SIX: 'six',
};

export const STEP_IDX = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
};

export const ERROR_MESSAGE = {
  isRequired: '必填',
  isNaturalNumber: '須為正整數',
};
