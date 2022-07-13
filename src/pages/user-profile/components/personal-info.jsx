import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

import * as S from '../styles';
import SelectInput from './select-input';
import TextInput from './text-input';

const validationSchema = yup.object({
  email: yup
    .string('Введіть свою пошту')
    .email('Введіть коректну пошту')
    .required("Це обов'язкове поле"),
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
  birthDay: yup.date('').required("Це обов'язкове поле").max(new Date()).typeError('Невірна дата'),
  childName: yup
    .string('')
    .min(2, 'Мінімум 2 символи')
    .max(40, 'Максимуму 20 символів')
    .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"),
  childBirthDay: yup
    .date('')
    .required("Це обов'язкове поле")
    .max(new Date())
    .typeError('Невірна дата'),
  region: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(3, 'Мінімум 3 символи')
    .max(20, 'Максимуму 20 символів'),
  district: yup.string('').min(3, 'Мінімум 3 символи').max(20, 'Максимуму 20 символів'),
  city: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(3, 'Мінімум 3 символи')
    .max(20, 'Максимуму 20 символів'),
  postoffice: yup.string('').min(3, 'Мінімум 3 символи'),
  phoneNumber: yup
    .string('')
    .min(3, 'Мінімум 3 символи')
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Формат +38 123 456 7890'),
  linkedinId: yup
    .string('')
    .min(10, 'Мінімум 10 символів')
    .matches(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm, 'enter valid url'),
  facebookId: yup
    .string('')
    .min(10, 'Мінімум 10 символів')
    .matches(/^(http(s)?:\/\/)?([\w]+\.)?facebook\.com\//gm, 'enter valid url'),
});

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
      gender: genderList[0].value,
      maritalStatus: maritalStatus[0].value,
      childGender: genderList[0].value,
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
            name="gender"
            label="Стать"
            value={formik.values.gender}
            onChange={formik.handleChange}
            list={genderList}
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
        <S.BlockTwoTitle>Відомості про дітей</S.BlockTwoTitle>
        <S.InputSevenWrapper>
          <TextInput
            name="childName"
            label="ПІБ дитини"
            value={formik.values.childName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.childName && Boolean(formik.errors.childName)}
            helperText={formik.touched.childName && formik.errors.childName}
          />
        </S.InputSevenWrapper>
        <S.InputEightWrapper>
          <SelectInput
            name="childGender"
            label="Стать"
            value={formik.values.childGender}
            onChange={formik.handleChange}
            list={genderList}
          />
        </S.InputEightWrapper>
        <S.InputNineWrapper>
          <TextInput
            name="childBirthDay"
            label="Дата народження"
            value={formik.values.childBirthDay}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.childBirthDay && Boolean(formik.errors.childBirthDay)}
            helperText={formik.touched.childBirthDay && formik.errors.childBirthDay}
          />
        </S.InputNineWrapper>
        <S.BlockThreeTitle>Адреса</S.BlockThreeTitle>
        <S.InputTenWrapper>
          <TextInput
            name="region"
            label="Область"
            value={formik.values.region}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.region && Boolean(formik.errors.region)}
            helperText={formik.touched.region && formik.errors.region}
          />
        </S.InputTenWrapper>
        <S.InputElevenWrapper>
          <TextInput
            name="district"
            label="Район"
            value={formik.values.district}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.district && Boolean(formik.errors.district)}
            helperText={formik.touched.district && formik.errors.district}
          />
        </S.InputElevenWrapper>
        <S.InputTwelveWrapper>
          <TextInput
            name="city"
            label="Місто/Село"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </S.InputTwelveWrapper>
        <S.InputThirteenWrapper>
          <TextInput
            name="postoffice"
            label="Найближче відділення Нової пошти"
            value={formik.values.postoffice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.postoffice && Boolean(formik.errors.postoffice)}
            helperText={formik.touched.postoffice && formik.errors.postoffice}
          />
        </S.InputThirteenWrapper>
        <S.BlockFourTitle>Контакти</S.BlockFourTitle>
        <S.InputFourteenWrapper>
          <TextInput
            name="phoneNumber"
            label="Номер телефону"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </S.InputFourteenWrapper>
        <S.InputFifteenWrapper>
          <TextInput
            name="email"
            label="Електронна пошта"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </S.InputFifteenWrapper>
        <S.BlockFiveTitle>Соціальні мережі</S.BlockFiveTitle>
        <S.InputSixteenWrapper>
          <TextInput
            name="linkedinId"
            label="Linkedin"
            value={formik.values.linkedinId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.linkedinId && Boolean(formik.errors.linkedinId)}
            helperText={formik.touched.linkedinId && formik.errors.linkedinId}
          />
        </S.InputSixteenWrapper>
        <S.InputSeventeenWrapper>
          <TextInput
            name="facebookId"
            label="Facebook"
            value={formik.values.facebookId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.facebookId && Boolean(formik.errors.facebookId)}
            helperText={formik.touched.facebookId && formik.errors.facebookId}
          />
        </S.InputSeventeenWrapper>
        <S.InputSubmitWrapper>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </S.InputSubmitWrapper>
      </S.MainInputContainer>
    </div>
  );
};

export default PersonalInfo;
