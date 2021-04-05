import { CARD_TYPE, SupportCard } from "../types";

export const rareDegreeCompare = (a: SupportCard, b: SupportCard) => {
  if(a.rareDegree === b.rareDegree) return 0;

  if(a.rareDegree > b.rareDegree) return 1;
  
  return -1;
}

export const convertToCardType = (target: string) => {
  switch(target){
    case 'スピード':
      return CARD_TYPE.SPEED
    case 'スタミナ':
      return CARD_TYPE.STAMINA
    case 'パワー':
      return CARD_TYPE.POWER
    case '根性':
      return CARD_TYPE.GUTS
    case '賢さ':
      return CARD_TYPE.INTELLIGENT
    case '友人':
      return CARD_TYPE.FRIEND
    default:
      throw Error('Wrong card type!')
  }
}

export const getCardTypeImageName = (target: CARD_TYPE) => {
  switch(target) {
    case CARD_TYPE.SPEED:
      return 'i_type1.png'
    case CARD_TYPE.STAMINA:
      return 'i_type2.png'
    case CARD_TYPE.POWER:
      return 'i_type3.png'
    case CARD_TYPE.GUTS:
      return 'i_type4.png'
    case CARD_TYPE.INTELLIGENT:
      return 'i_type5.png'
    case CARD_TYPE.FRIEND:
      return 'i_type6.png'
  }
}
