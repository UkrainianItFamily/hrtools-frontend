import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { FlexContainer } from 'src/components/';
import * as Yup from 'yup';

import * as S from '../../styles';

const ForgotPassSchema = Yup.object().shape({
  email: Yup.string().email('Некоректна email адрасса').required("Обов'язкове поле"),
});

const forgotPass = () => {
  const handleRequest = (values) => {
    console.log(values);
  };

  return (
    <>
      <S.AuthTitle>Забули пароль?</S.AuthTitle>
      <S.AuthSubTitle>Вам на пошту буде відправлено з посиланням для зміни пароля</S.AuthSubTitle>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ForgotPassSchema}
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
          <form>
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
                disabled={!(isValid && dirty) || isSubmitting}
              >
                Надіслати лист
              </Button>
            </S.FormRow>
          </form>
        )}
      </Formik>
    </>
  );
};

export default forgotPass;
