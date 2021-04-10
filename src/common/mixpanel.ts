import mixpanel from 'mixpanel-browser';
mixpanel.init('3ac85b06b049368b41656dee5b05b206');

const production = process.env.NODE_ENV === 'production';

const actions = {
  track: (name: MIX_TRACK, props: {}) => {
    if (production) mixpanel.track(name, props);
  },
};

export const TRACK = {
  MAINPAGE: 'MAINPAGE',
  SET_UMA: 'SET_UMA',
  SET_CARD: 'SET_CARD',
  SET_FAVORITE: 'SET_FAVORITE',
} as const;
type MIX_TRACK = typeof TRACK[keyof typeof TRACK];
export const Mixpanel = actions;
