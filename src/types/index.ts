export type CardEventChoice = {
  title: string;
  titleKr: string;
  effect: string;
};

export type CardEvent = {
  title: string;
  titleKr: string;
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
  titleKr: string;
  effect: string;
};

export type UmaEvent = {
  title: string;
  titleKr: string;
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

export enum UmaSkillCategoryEnum{
  ORIGIN='ORIGIN',
  BASIC='BASIC',
  AWAKENING='AWAKENING'
}

export enum SkillGradeEnum{
  NORMAL = 'NORMAL',
  RARE = 'RARE',
  ORIGINAL = 'ORIGINAL'
}

export type SkillGradeType={
  name:SkillGradeEnum
}

export enum SkillBuffTypeEnum{
  ENDURANCE='ENDURANCE',
  ACCELERATION='ACCELERATION',
  VELOCITY='VELOCITY',
  STAMINA='STAMINA',
  INTELLIGENCE='INTELLIGENCE',
  GUTS='GUTS',
  SPEED='SPEED',
  POWER='POWER',
  DEBUF_SPEED='DEBUF_SPEED',
  START='START',
  PROVOCATION='PROVOCATION',
  POSITION='POSITION',
  EYESIGHT='EYESIGHT',
  DEBUF_EYESIGHT='DEBUF_EYESIGHT',
  DEBUF_STAMINA='DEBUF_STAMINA',
  PHYSICAL='PHYSICAL'
}

export type SkillBuffType =  {
  name:SkillBuffTypeEnum
}

export enum SkillDistanceTypeEnum{
  SHORT='SHORT',
  MILE='MILE',
  MEDIUM='MEDIUM',
  LONG='LONG',
  DIRT='DIRT'
}

export type SkillDistanceType = {
  name: SkillDistanceTypeEnum
}

export enum SkillOperationTypeEnum{
  GETAWAY='GETAWAY',
  PRECEDING='PRECEDING',
  PRE_ENTRY='PRE_ENTRY',
  POST_ENTRY='POST_ENTRY'
}

export type SkillOperationType = {
  name:SkillOperationTypeEnum
}

export type SkillType = {
  name:string,
  nameKr:string,
  description:string,
  condition:string,
  icon:string,
  grade:SkillGradeType,
  buffType:SkillBuffType,
  distanceType?:SkillDistanceType,
  operationType:SkillOperationType
}



export type UmaSkilType = {
  category:UmaSkillCategoryEnum,
  skill:SkillType
}

export type UmaInfo = {
  umaName:string,
  umaNameKr:string,
  secondName:string,
  secondNameKr:string,
  umaImage:string,
  skills:SkillType[]
}