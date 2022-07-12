import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

import * as S from '../styles';
import SelectInput from './select-input';
import TextInput from './text-input';

const validationSchema = yup.object({
  // email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
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
    .max(20, 'Максимуму 20 символів'),
  middleName: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(3, 'Мінімум 3 символи')
    .max(20, 'Максимуму 20 символів'),
  birthDay: yup.date('').required("Це обов'язкове поле").max(new Date()),
});

const sexList = [
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
    label: 'неодруж.',
    value: 'single1',
  },
  {
    label: 'незаміж.',
    value: 'single2',
  },
  {
    label: 'одруж.',
    value: 'married1',
  },
  {
    label: 'заміж.',
    value: 'married2',
  },
];

const PersonalInfo = () => {
  const formik = useFormik({
    initialValues: {
      // email: 'foobar@example.com',
      surname: '',
      name: '',
      middleName: '',
      sex: sexList[0].value,
      maritalStatus: maritalStatus[0].value,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log('formik: ', formik);
  return (
    <div>
      <S.MainInputContainer onSubmit={formik.handleSubmit}>
        <S.BlockOneTitle>Основна інформація</S.BlockOneTitle>
        <S.InputOneWrapper>
          <TextInput
            name="surname"
            label="Прізвище"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
        </S.InputOneWrapper>
        <S.InputTwoWrapper>
          <TextInput
            name="name"
            label="Ім'я"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </S.InputTwoWrapper>
        <S.InputThreeWrapper>
          <TextInput
            name="middleName"
            label="По-батькові"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.middleName && Boolean(formik.errors.middleName)}
            helperText={formik.touched.middleName && formik.errors.middleName}
          />
        </S.InputThreeWrapper>
        <S.InputFourWrapper>
          <TextInput
            name="birthDay"
            label="Дата народження"
            value={formik.values.birthDay}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.birthDay && Boolean(formik.errors.birthDay)}
            helperText={formik.touched.birthDay && formik.errors.birthDay}
          />
        </S.InputFourWrapper>
        <S.InputFiveWrapper>
          <SelectInput
            name="sex"
            label="Стать"
            value={formik.values.sex}
            onChange={formik.handleChange}
            list={sexList}
          />
        </S.InputFiveWrapper>
        <S.InputSixWrapper>
          <SelectInput
            name="maritalStatus"
            label="Сімейний стан"
            value={formik.values.maritalStatus}
            onChange={formik.handleChange}
            list={maritalStatus}
          />
        </S.InputSixWrapper>
        <S.InputFifteenWrapper>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </S.InputFifteenWrapper>
      </S.MainInputContainer>
    </div>
  );
};

export default PersonalInfo;
