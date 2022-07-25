import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FieldArray, FormikProvider, getIn, useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { MyDataPicker } from 'src/components';
import { genderList, maritalStatus } from 'src/constants';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import * as S from '../styles';

const validationSchema = yup.object({
  surname: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(2, 'Мінімум 2 символи')
    .max(50, 'Максимуму 50 символів')
    .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"),
  name: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(2, 'Мінімум 2 символи')
    .max(50, 'Максимуму 50 символів')
    .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"),
  middleName: yup
    .string('')
    .required("Це обов'язкове поле")
    .min(2, 'Мінімум 2 символи')
    .max(50, 'Максимуму 50 символів')
    .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"),
  // birthDay: yup.string().test('len', 'не коректа дата', (val = '') => {
  //   const valLen = val.replace(/[^a-zA-Z0-9 ]/g, '').length;
  //   console.log(valLen);
  //   return valLen === 8;
  // }),
  childList: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .required("Це обов'язкове поле")
        .min(2, 'Мінімум 2 символи')
        .max(50, 'Максимуму 50 символів')
        .matches(/^[^0-9`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐]*$/, "Будь-ласка, введіть коректне ім'я"), // these constraints take precedence
    }),
  ),
});

const ChildRows = ({ formik }) => (
  <FormikProvider value={formik}>
    <FieldArray
      name="childList"
      render={(helpers) => (
        <div>
          {formik.values.childList.map((child, index) => (
            <Box sx={{ flexGrow: 1 }} key={child.id}>
              <S.PersonalWrap>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      id={`childList[${index}].name`}
                      name={`childList[${index}].name`}
                      label="ПІБ дитини"
                      value={child.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.childList &&
                        formik.touched.childList[index] &&
                        formik.touched.childList[index].name &&
                        Boolean(
                          formik.errors.childList &&
                            formik.errors.childList[index] &&
                            formik.errors.childList[index].name,
                        )
                      }
                      helperText={
                        formik.touched.childList &&
                        formik.touched.childList[index] &&
                        formik.touched.childList[index].name &&
                        formik.errors.childList &&
                        formik.errors.childList[index] &&
                        formik.errors.childList[index].name
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel id={`label-childGender${index}`}>Стать</InputLabel>
                      <Select
                        labelId={`label-childGender${index}`}
                        id={`childList[${index}].gender`}
                        name={`childList[${index}].gender`}
                        label="Стать"
                        value={child.gender ? child.gender : genderList[0].value}
                        onChange={formik.handleChange}
                      >
                        {genderList.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <MyDataPicker
                      fullWidth
                      id={`childList[${index}].data`}
                      name={`childList[${index}].data`}
                      label="Дата народження"
                      value={child.data ? child.data : new Date()}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Grid>
                </Grid>
                {index >= formik.values.childList.length - 1 ? (
                  <S.PersonalButtonAdd
                    onClick={() => helpers.push({ id: uuidv4(), name: '', gender: '', data: '' })}
                  >
                    <ControlPointIcon />
                  </S.PersonalButtonAdd>
                ) : (
                  <S.PersonalButtonAdd onClick={() => helpers.remove(index)}>
                    <RemoveCircleOutlineIcon />
                  </S.PersonalButtonAdd>
                )}
              </S.PersonalWrap>
            </Box>
          ))}
        </div>
      )}
    />
  </FormikProvider>
);

const PersonalForm = () => {
  const formik = useFormik({
    initialValues: {
      surname: '',
      name: '',
      middleName: '',
      birthDay: new Date(),
      gender: genderList[0].value,
      maritalStatus: maritalStatus[0].value,
      childList: [
        {
          id: uuidv4(),
          name: '',
          gender: '',
          data: '',
        },
      ],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <S.PersonalBlock>
        <S.PersonaTitle>Основна інформація</S.PersonaTitle>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="surname"
                label="Прізвище"
                value={formik.values.surname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="name"
                label="Ім'я"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="middleName"
                label="По-батькові"
                value={formik.values.middleName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.middleName && Boolean(formik.errors.middleName)}
                helperText={formik.touched.middleName && formik.errors.middleName}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <MyDataPicker
                fullWidth
                id="birthDay"
                name="birthDay"
                label="Дата народження"
                value={formik.values.birthDay}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.birthDay && Boolean(formik.errors.birthDay)}
                helperText={formik.touched.birthDay && formik.errors.birthDay}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="label-gender">Стать</InputLabel>
                <Select
                  labelId="label-gender"
                  id="gender"
                  name="gender"
                  label="Стать"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  {genderList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="label-gender">Сімейний статус</InputLabel>
                <Select
                  labelId="label-gender"
                  id="maritalStatus"
                  name="maritalStatus"
                  label="Сімейний статус"
                  value={formik.values.maritalStatus}
                  onChange={formik.handleChange}
                >
                  {maritalStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </S.PersonalBlock>

      <S.PersonalBlock>
        <S.PersonaTitle>Відомості про дітей</S.PersonaTitle>
        <ChildRows formik={formik} />
      </S.PersonalBlock>
    </form>
  );
};

ChildRows.propTypes = {
  formik: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PersonalForm;
