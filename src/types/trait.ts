export type TraitKind = 'status' | 'aptitude' | 'unique' | 'common';

export interface Trait {
  name: string;
  type: TraitKind;
}
