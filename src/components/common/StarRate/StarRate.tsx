import React from 'react';
import './StarRate.scss'

type Props = {
  star: number
}

const StarRate = (props: Props) => {
  const { star } = props
  return <div className="StarRate">
    {
      [0, 0, 0, 0, 0]
        .fill(1, 0, star)
        .map((x) => {
          if (x === 1) {
            return "★";
          }
          return "☆";
        })
    }
  </div>
}

export default StarRate;
