/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectInput = ({ name, list = [], value, onChange, label, id }) => (
  <FormControl fullWidth>
    <InputLabel id={`label${id}`}>{label}</InputLabel>
    <Select
      name={name}
      labelId={`label${id}`}
      id={id}
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
  </FormControl>
);
export default SelectInput;
