import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  InputMask,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { FieldMask, SelectInput } from 'src/components';
import * as yup from 'yup';

import * as S from '../styles';

const genderList = [
  {
    label: 'чоловіча',
    value: 'male',
  },
  {
    label: 'жіноча',
    value: 'female',
  },
];
const maritalStatus = [
  {
    label: 'В шлюбі',
    value: '1',
  },
  {
    label: 'Не в шлюбі',
    value: '2',
  },
];
const validationSchema = yup.object({
  surname: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(2, 'Мінімум 2 символи')
    .max(20, 'Максимуму 20 символів')
    .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"),
  name: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(2, 'Мінімум 2 символи')
    .max(20, 'Максимуму 20 символів')
    .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"),
  middleName: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(2, 'Мінімум 2 символи')
    .max(20, 'Максимуму 20 символів')
    .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"),

  gender: yup.object().shape({
    label: yup.string().required("Це обов'язкове поле"),
    value: yup.string().required("Це обов'язкове поле"),
  }),
});

const PersonalForm = () => {
  const formik = useFormik({
    initialValues: {
      surname: '',
      name: '',
      middleName: '',
      birthDay: '',
      gender: genderList[0].value,
      maritalStatus: maritalStatus[0].value,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <S.PersonalBlock>
        <S.PersonaTitle>Основна інформація</S.PersonaTitle>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="surname"
                label="Прізвище"
                value={formik.values.surname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="name"
                label="Ім'я"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="middleName"
                label="По-батькові"
                value={formik.values.middleName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.middleName && Boolean(formik.errors.middleName)}
                helperText={formik.touched.middleName && formik.errors.middleName}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FieldMask
                name="birthDay"
                id="birthDay"
                mask="99-99-9999"
                placeholder="99-99-9999"
                label="Дата народження"
                value={formik.values.birthDay}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="label-gender">Стать</InputLabel>
                <Select
                  labelId="label-gender"
                  id="gender"
                  name="gender"
                  label="Стать"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  {genderList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="label-gender">Сімейний статус</InputLabel>
                <Select
                  labelId="label-gender"
                  id="maritalStatus"
                  name="maritalStatus"
                  label="Сімейний статус"
                  value={formik.values.maritalStatus}
                  onChange={formik.handleChange}
                >
                  {maritalStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </S.PersonalBlock>

      <S.PersonalBlock>
        <S.PersonaTitle>Відомості про дітей</S.PersonaTitle>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} />
        </Box>
      </S.PersonalBlock>
    </form>
  );
};

export default PersonalForm;
