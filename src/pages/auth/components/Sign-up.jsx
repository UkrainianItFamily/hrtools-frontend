import { Alert, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlexContainer, Loader } from 'src/components/';
import { authActions } from 'src/store/actions';
import * as Yup from 'yup';

import * as S from '../styles';

const SignUpSchema = Yup.object().shape({
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

const SignUpForm = ({ setformSubmit, setformData, authLoader }) => {
  const errors = useSelector((state) => state.authReducer.errors);
  const dispatch = useDispatch();

  const handleRequest = (values) => {
    console.log(values);

    dispatch(authActions.createUser(values)).then(() => {
      if (errors) {
        console.log(errors);
        setformSubmit(true);
        setformData(values);
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      passwordCheck: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => handleRequest(values),
  });
  return (
    <>
      {!authLoader ? (
        <>
          <S.AuthTitle>Реєстрація</S.AuthTitle>

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
                helperText={
                  formik.errors.password && formik.touched.password && formik.errors.password
                }
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                label="Підтвердити пароль"
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                variant="outlined"
                error={formik.errors.passwordCheck && formik.touched.passwordCheck}
                helperText={
                  formik.errors.passwordCheck &&
                  formik.touched.passwordCheck &&
                  formik.errors.passwordCheck
                }
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                fullWidth
                label="Ім’я"
                id="name"
                name="name"
                variant="outlined"
                error={formik.errors.name && formik.touched.name}
                helperText={formik.errors.name && formik.touched.name && formik.errors.name}
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                fullWidth
                label="Прізвище"
                name="lastname"
                id="lastname"
                variant="outlined"
                error={formik.errors.lastname && formik.touched.lastname}
                helperText={
                  formik.errors.lastname && formik.touched.lastname && formik.errors.lastname
                }
              />
            </S.FormRow>
            <S.FormRow>
              <TextField
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                label="Номер телефону"
                name="phone"
                id="phone"
                variant="outlined"
                error={formik.errors.phone && formik.touched.phone}
                helperText={formik.errors.phone && formik.touched.phone && formik.errors.phone}
              />
            </S.FormRow>
            <S.FormRow>
              <FlexContainer $justify="flex-end">
                <S.StyledLink to="/auth/">У вас є аккаунт? Увійти</S.StyledLink>
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
                Створити аккаунт
              </Button>
            </S.FormRow>
          </form>
          {errors ? (
            <Alert severity="error">Такий аккаунт уже існує або щось пішло не так</Alert>
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

const FormSubmitText = ({ formData, authLoader }) => {
  const [mailSended, setMailSended] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    let timeout;
    if (seconds > 0) {
      timeout = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      setMailSended(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [seconds]);

  const handleRequest = () => {
    dispatch(authActions.createUser(formData));
    setMailSended(true);
    setSeconds(10);
  };

  return (
    <>
      {!authLoader ? (
        <>
          <S.AuthTitle>
            Будь ласка, підтвердіть свою адресу електронної пошти. Для цього перейдіть за посиланням
            з листа, що вам було надіслано на пошту
          </S.AuthTitle>
          <S.FormRow>
            <FlexContainer $justify="center">
              <Button onClick={handleRequest} disabled={mailSended} variant="contained">
                Надіслати лист ще раз
              </Button>
            </FlexContainer>
          </S.FormRow>
          {mailSended && (
            <S.FormRow>
              <FlexContainer $justify="center">Повідомлення відправленно.</FlexContainer>
              <FlexContainer $justify="center">
                Можна повторно надіслати лише раз на 10 секунд
              </FlexContainer>
            </S.FormRow>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

const SignUp = () => {
  const [formSubmit, setformSubmit] = useState(false);
  const authLoader = useSelector((state) => state.authReducer.waiter);
  const [formData, setformData] = useState({});

  return !formSubmit ? (
    <SignUpForm
      setformSubmit={setformSubmit}
      setformData={setformData}
      authLoader={authLoader}
      formData={formData}
    />
  ) : (
    <FormSubmitText formData={formData} authLoader={authLoader} />
  );
};

FormSubmitText.propTypes = {
  formData: PropTypes.objectOf(PropTypes.string).isRequired,
  authLoader: PropTypes.bool.isRequired,
};
SignUpForm.propTypes = {
  setformSubmit: PropTypes.func.isRequired,
  setformData: PropTypes.func.isRequired,
  authLoader: PropTypes.bool.isRequired,
};

export default SignUp;
