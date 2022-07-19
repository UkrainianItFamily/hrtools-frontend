import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import * as S from '../styles';

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

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ResetPassSchema,
    onSubmit: (values) => handleRequest(values),
  });
  return (
    <>
      <S.AuthTitle>Відновлення пароля</S.AuthTitle>

      <form>
        <S.FormRow>
          <TextField
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            label="Новий пароль"
            type="password"
            name="password"
            id="password"
            variant="outlined"
            error={formik.errors.password && formik.touched.password}
            helperText={formik.errors.password && formik.touched.password && formik.errors.password}
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
          <Button
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
          >
            Змінити пароль
          </Button>
        </S.FormRow>
      </form>
    </>
  );
};

export default ResetPass;
