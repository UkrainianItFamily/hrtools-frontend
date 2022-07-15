import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { FlexContainer } from 'src/components/';
import * as Yup from 'yup';

import * as S from '../styles';

const ForgotPassSchema = Yup.object().shape({
  email: Yup.string().email('Некоректна email адрасса').required("Обов'язкове поле"),
});

const forgotPass = () => {
  const handleRequest = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPassSchema,
    onSubmit: (values) => handleRequest(values),
  });

  return (
    <>
      <S.AuthTitle>Забули пароль?</S.AuthTitle>
      <S.AuthSubTitle>Вам на пошту буде відправлено з посиланням для зміни пароля</S.AuthSubTitle>

      <form>
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
          <FlexContainer $justify="flex-end">
            <S.StyledLink to="/auth/">Повернутися до авторизації</S.StyledLink>
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
            Надіслати лист
          </Button>
        </S.FormRow>
      </form>
    </>
  );
};

export default forgotPass;
