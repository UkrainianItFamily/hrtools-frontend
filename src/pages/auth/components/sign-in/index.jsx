import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { FlexContainer } from 'src/components/';
import * as Yup from 'yup';

import * as S from '../../styles';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Некоректна email адрасса').required("Обов'язкове поле"),
  password: Yup.string()
    .required("Обов'язкове поле")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Пароль мусить мати 8 і більше символів, хоча б одну велику літеру, хоча б одну малу літеру та одну цифру',
    ),
});

const SignIn = () => {
  const handleRequest = (values) => {
    console.log(values);
  };
  return (
    <>
      <S.AuthTitle>Авторизація</S.AuthTitle>
      <Formik
        initialValues={{
          email: '',

          password: '',
        }}
        validationSchema={SignInSchema}
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
                required
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                label="E-mail"
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
              <FlexContainer $justify="space-between">
                <S.StyledLink to="/auth/sign-up">Реєстрація</S.StyledLink>
                <S.StyledLink to="/auth/forgot-pass">Забули пароль?</S.StyledLink>
              </FlexContainer>
            </S.FormRow>
            <S.FormRow>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                disabled={!(isValid && dirty) || isSubmitting}
              >
                Увійти
              </Button>
            </S.FormRow>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
