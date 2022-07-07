import React from 'react';
import { Trait } from '../../types/trait';
import './TraitDetail.scss';

type Props = {
  trait: Trait;
  onClick: () => void;
};

export default function TraitDetail({ trait, onClick }: Props) {
  
  return (
    <span className={'Trait'} data-type={trait.type} onClick={onClick}>
      {trait.name}
    </span>
  );
}
