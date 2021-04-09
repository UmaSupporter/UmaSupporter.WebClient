export type CardEventChoice = {
  title: string;
  effect: string;
};

export type CardEvent = {
  title: string;
};

export type SupportCard = {
  uuid: number;
  cardName: string;
  secondName: string;
  rareDegree: 'SSR' | 'SR' | 'R';
  cardImage: string;
  cardType: string;
};

export type CardEventWithChoice = CardEvent & {
  choices: CardEventChoice[];
};

export type Uma = {
  uuid: number;
  umaName: string;
  secondName: string;
  rareDegree: 3 | 2 | 1;
  umaImage: string;
};

export type UmaEventChoice = {
  title: string;
  effect: string;
};

export type UmaEvent = {
  title: string;
};

export type UmaEventWithChoice = UmaEvent & {
  choices: UmaEventChoice[];
};

export enum CARD_TYPE {
  SPEED = 'スピード',
  STAMINA = 'スタミナ',
  POWER = 'パワー',
  GUTS = '根性',
  INTELLIGENT = '賢さ',
  FRIEND = '友人',
}
