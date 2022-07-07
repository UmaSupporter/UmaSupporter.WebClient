import React from 'react';
import './TraitList.scss';

export default function TraitList({ children }: { children: React.ReactNode }) {
  return <div className={`TraitList`}>{children}</div>;
}
