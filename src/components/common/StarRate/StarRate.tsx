import React from 'react';
import './StarRate.scss';

type Props = {
  star: number;
};

const StarRate = (props: Props) => {
  const { star } = props;
  const starString = new Array(5)
    .fill(0, 0, 5)
    .fill(1, 0, star)
    .map((x) => {
      if (x === 1) {
        return '★';
      }
      return '☆';
    });

  return <div className={'StarRate'}>{starString}</div>;
};

export default StarRate;
