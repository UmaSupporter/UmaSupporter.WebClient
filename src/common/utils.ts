import { SupportCard } from "../types";

export const rareDegreeCompare = (a: SupportCard, b: SupportCard) => {
  if(a.rareDegree === b.rareDegree) return 0;

  if(a.rareDegree > b.rareDegree) return 1;
  
  return -1;
}
