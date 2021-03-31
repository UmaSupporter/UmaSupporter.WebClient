export type CardEventChoice = {
  title: string;
  effect: string;
}

export type CardEvent = {
  title: string;
}

export type SupportCard = {
  uuid: number;
  cardName: string;
  secondName: string;
  rareDegree: "SSR" | "SR" | "R";
  cardImage: string;
  cardType: string;
};

export type CardEventWithChoice = CardEvent & {
  choices: CardEventChoice[];
};
