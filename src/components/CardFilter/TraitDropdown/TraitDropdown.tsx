import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { UseAutocompleteProps } from '@material-ui/lab/useAutocomplete';
import React, { useReducer, useRef, useState } from 'react';

import './TraitDropdown.scss';

interface TraitDropddownProps {
  type: 'status' | 'aptitude' | 'unique' | 'common';
  items: string[];
  onChange: UseAutocompleteProps<
    string,
    undefined,
    undefined,
    undefined
  >['onChange'];
}

const labels: Record<TraitDropddownProps['type'], string> = {
  status: '스탯',
  aptitude: '적성',
  unique: '고유스킬',
  common: '백인자',
};

export default function TraitDropddown({
  items,
  type,
  onChange: onChangeProvided,
}: TraitDropddownProps) {
  const [key, updateKey] = useReducer((v) => v + 1, 0);
  const onChange: typeof onChangeProvided = (event, value, ...args) => {
    onChangeProvided?.(event, value, ...args);
    updateKey();
  };

  return (
    <Autocomplete
      key={key}
      className="TraitDropdown"
      options={items}
      data-type={type}
      value={null}
      clearOnBlur
      clearOnEscape
      renderInput={(params) => (
        <TextField {...params} label={labels[type]} variant="outlined" />
      )}
      onChange={onChange}
    />
  );
}
