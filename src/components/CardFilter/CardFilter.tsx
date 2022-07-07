import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import './CardFilter.scss';

const CardFilter: React.FC<{}> = () => {
  return (
    <div className={`CardFilter`}>
      <Autocomplete
        multiple
        options={stats as TempOption[]}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="스탯" variant="outlined" />
        )}
      />
      <Autocomplete
        multiple
        options={stats as TempOption[]}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="적성" variant="outlined" />
        )}
      />
      <Autocomplete
        multiple
        options={stats as TempOption[]}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="고유스킬" variant="outlined" />
        )}
      />
      <div className={`WhiteTraits`}>
        <Autocomplete
          multiple
          options={stats as TempOption[]}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="레이스" variant="outlined" />
          )}
        />
        <Autocomplete
          multiple
          options={stats as TempOption[]}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="시나리오" variant="outlined" />
          )}
        />
        <Autocomplete
          multiple
          options={stats as TempOption[]}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="스킬" variant="outlined" />
          )}
        />
      </div>
    </div>
  );
};

interface TempOption {
  title: string;
  id: number;
}

const stats = [
  { title: '스킬1', id: 1 },
  { title: '스킬2', id: 2 },
  { title: '스킬3', id: 2 },
];

export default CardFilter;
