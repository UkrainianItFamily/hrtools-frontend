import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from '../../styles';

const SignUpForm = ({ setformSubmite }) => {
  const handleRequest = (values) => {
    console.log(values);
    setformSubmite(true);
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
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Обов'язкове поле";
          } else if (values.name.length <= 2) {
            errors.name = 'Має бути довше 2 символів';
          }

          if (!values.lastname) {
            errors.nalastnameme = "Обов'язкове поле";
          } else if (values.lastname.length <= 2) {
            errors.lastname = 'Має бути довше 2 символів';
          }

          if (!values.email) {
            errors.email = "Обов'язкове поле";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Некоректна email адрасса';
          }

          if (!values.phone) {
            errors.phone = "Обов'язкове поле";
          }

          if (!values.password) {
            errors.password = "Обов'язкове поле";
          } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
            errors.password =
              'Пароль мусить мати 8 і більше символів, хоча б одну велику літеру, хоча б одну малу літеру та одну цифру';
          }

          if (!values.passwordCheck) {
            errors.passwordCheck = "Обов'язкове поле";
          } else if (!(values.passwordCheck === values.password)) {
            errors.passwordCheck = 'Паролі не збігаються';
          }

          return errors;
        }}
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
const FormSubmiteText = () => (
  <>
    <S.AuthTitle>Лист із підтведженням було відправленно на ваш email</S.AuthTitle>
    <div className="flex-center">
      <NavLink to="/">
        <Button variant="contained">На головну</Button>
      </NavLink>
    </div>
  </>
);
const SignUp = () => {
  const [formSubmite, setformSubmite] = useState(false);

  return !formSubmite ? <SignUpForm setformSubmite={setformSubmite} /> : <FormSubmiteText />;
};
SignUpForm.propTypes = {
  setformSubmite: PropTypes.func.isRequired,
};
export default SignUp;
