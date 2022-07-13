import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import * as S from '../../styles';

const ResetPassSchema = Yup.object().shape({
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

const ResetPass = () => {
  const handleRequest = (values) => {
    console.log(values);
  };
  return (
    <>
      <S.AuthTitle>Відновлення пароля</S.AuthTitle>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ResetPassSchema}
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
                label="Новий пароль"
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
                Змінити пароль
              </Button>
            </S.FormRow>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ResetPass;
