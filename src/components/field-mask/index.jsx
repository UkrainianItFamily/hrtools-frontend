import { TextField } from '@mui/material';
import InputMask from 'react-input-mask';

const FieldMask = (props) => <InputMask {...props}>{() => <TextField {...props} />}</InputMask>;

export default FieldMask;
