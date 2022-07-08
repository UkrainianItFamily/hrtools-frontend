import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FlexContainer } from 'src/components/';
import * as Yup from 'yup';

import * as S from '../../styles';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Не менше 2 символів')
    .max(50, 'Не більше 50 символів')
    .required("Обов'язкове поле"),
  lastname: Yup.string()
    .min(2, 'Не менше 2 символів')
    .max(50, 'Не більше 50 символів')
    .required("Обов'язкове поле"),
  email: Yup.string().email('Некоректна email адрасса').required("Обов'язкове поле"),
  phone: Yup.string().required("Обов'язкове поле"),
  password: Yup.string()
    .required("Обов'язкове поле")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Пароль мусить мати 8 і більше символів, хоча б одну велику літеру, хоча б одну малу літеру та одну цифру',
    ),
  passwordCheck: Yup.string()
    .required("Обов'язкове поле")
    .oneOf([Yup.ref('password'), null], 'Паролі не збігаються'),
});

const SignUpForm = ({ setformSubmit }) => {
  const handleRequest = (values) => {
    console.log(values);
    setformSubmit(true);
  };
  return (
    <>
      <S.AuthTitle>Реєстрація</S.AuthTitle>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          phone: '',
          password: '',
          passwordCheck: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleRequest(values)}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <S.FormRow>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                required
                fullWidth
                label="Ім’я"
                id="name"
                name="name"
                variant="outlined"
                error={errors.name && touched.name}
                helperText={errors.name && touched.name && errors.name}
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                required
                fullWidth
                label="Прізвище"
                name="lastname"
                id="lastname"
                variant="outlined"
                error={errors.lastname && touched.lastname}
                helperText={errors.lastname && touched.lastname && errors.lastname}
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                required
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                label="Ваша електронна адреса"
                name="email"
                id="email"
                variant="outlined"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                required
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                label="Номер телефону"
                name="phone"
                id="phone"
                variant="outlined"
                error={errors.phone && touched.phone}
                helperText={errors.phone && touched.phone && errors.phone}
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                required
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                label="Пароль"
                type="password"
                name="password"
                id="password"
                variant="outlined"
                error={errors.password && touched.password}
                helperText={errors.password && touched.password && errors.password}
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                required
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                label="Підтвердити пароль"
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                variant="outlined"
                error={errors.passwordCheck && touched.passwordCheck}
                helperText={errors.passwordCheck && touched.passwordCheck && errors.passwordCheck}
              />
            </S.FormRow>
            <S.FormRow>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                disabled={!(isValid && dirty) || isSubmitting}
              >
                Створити аккаунт
              </Button>
            </S.FormRow>
          </form>
        )}
      </Formik>
    </>
  );
};
const FormSubmitText = () => (
  <>
    <S.AuthTitle>Лист із підтведженням було відправленно на ваш email</S.AuthTitle>
    <FlexContainer $justify="center">
      <NavLink to="/">
        <Button variant="contained">На головну</Button>
      </NavLink>
    </FlexContainer>
  </>
);
const SignUp = () => {
  const [formSubmit, setformSubmit] = useState(false);

  return !formSubmit ? <SignUpForm setformSubmit={setformSubmit} /> : <FormSubmitText />;
};
SignUpForm.propTypes = {
  setformSubmit: PropTypes.func.isRequired,
};
export default SignUp;
