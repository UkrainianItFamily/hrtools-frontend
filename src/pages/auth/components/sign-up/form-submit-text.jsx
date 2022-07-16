import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FlexContainer, Loader } from 'src/components/';
import * as S from 'src/pages/auth/styles';
import { authActions } from 'src/store/actions';

const FormSubmitText = ({ formData, authLoader }) => {
  const [mailSended, setMailSended] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendTimer = setTimeout(
      () =>
        setSeconds((prev) => {
          if (seconds > 0 && mailSended) {
            return prev - 1;
          }
          setMailSended(false);
          return 0;
        }),
      1000,
    );

    return () => {
      clearTimeout(sendTimer);
    };
  }, [seconds, mailSended]);

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
                Можна повторно надіслати лише раз на {seconds} секунд
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

FormSubmitText.propTypes = {
  formData: PropTypes.objectOf(PropTypes.string).isRequired,
  authLoader: PropTypes.bool.isRequired,
};

export default FormSubmitText;
