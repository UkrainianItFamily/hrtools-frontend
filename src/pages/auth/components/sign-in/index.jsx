import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
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
  const formik = useFormik({
    initialValues: {
      email: '',

      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => handleRequest(values),
  });
  return (
    <>
      <S.AuthTitle>Авторизація</S.AuthTitle>

      <form onSubmit={formik.handleSubmit}>
        <S.FormRow>
          <TextField
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            label="E-mail"
            name="email"
            id="email"
            variant="outlined"
            error={formik.errors.email && formik.touched.email}
            helperText={formik.errors.email && formik.touched.email && formik.errors.email}
          />
        </S.FormRow>
        <S.FormRow>
          <TextField
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            label="Пароль"
            type="password"
            name="password"
            id="password"
            variant="outlined"
            error={formik.errors.password && formik.touched.password}
            helperText={formik.errors.password && formik.touched.password && formik.errors.password}
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
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
          >
            Увійти
          </Button>
        </S.FormRow>
      </form>
    </>
  );
};

export default SignIn;
