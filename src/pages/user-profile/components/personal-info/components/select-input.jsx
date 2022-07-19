/* eslint-disable react/prop-types */
import { InputLabel, MenuItem, Select } from '@mui/material';

import * as S from '../../../styles';

const SelectInput = ({ name, list = [], value, onChange, label }) => (
  <S.InputContainer>
    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
    <Select
      name={name}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label={label}
      value={value}
      onChange={onChange}
    >
      {list.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </S.InputContainer>
);
export default SelectInput;
