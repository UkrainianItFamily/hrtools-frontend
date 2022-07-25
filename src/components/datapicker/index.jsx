/* eslint-disable react/prop-types */
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import { TextField } from '@mui/material';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

const MyDataPicker = (props) => {
  const { value } = props;
  const [startDate, setStartDate] = useState(value);
  return (
    <DatePicker
      selected={startDate}
      maxDate={new Date()}
      onChange={(date) => setStartDate(date)}
      customInput={<TextField readOnly {...props} />}
    />
  );
};

export default MyDataPicker;
