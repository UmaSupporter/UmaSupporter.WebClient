import React from 'react';

interface Trait {
  name: string;
  type: 'status' | 'aptitude' | 'unique' | 'common';
}

export default function Trait(trait: Trait) {
  return (
    <div>
      <span className={trait.type}>{trait.name}</span>
    </div>
  );
}
