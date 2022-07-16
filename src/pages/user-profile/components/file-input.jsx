/* eslint-disable react/prop-types */
import { useState } from 'react';
import { images } from 'src/assets';

import * as S from '../styles';

const FileInput = ({ files, setFiles }) => {
  const uploaderHandle = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);
  };

  return (
    <S.fileInputContainer>
      <S.fileInputWrapper>
        <S.fileInputInput type="file" onChange={uploaderHandle} />
        <S.fileInputButton>
          <S.fileInputIcon src={images.plusIcon} />
          Додати резюме
        </S.fileInputButton>
      </S.fileInputWrapper>
      <S.fileInpurHelperText>DOC, DOCX, PDF (до 5mb)</S.fileInpurHelperText>
    </S.fileInputContainer>
  );
};

export default FileInput;
