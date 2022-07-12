/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import { InputLabel, TextField } from '@mui/material';

import * as S from '../styles';

const TextInput = ({ name, label, value, onChange, error, helperText, onBlur, type = 'text' }) => (
  <S.InputContainer>
    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
    <TextField
      id={name}
      name={name}
      label={label}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      error={error}
      helperText={helperText}
      type={type}
    />
  </S.InputContainer>
);

export default TextInput;
