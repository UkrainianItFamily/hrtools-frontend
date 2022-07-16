/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { images } from 'src/assets';

import * as S from '../../../styles';

const FileInput = ({ files, setFiles, removeFile }) => {
  const uploaderHandle = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    const formData = new FormData();
    formData.append(file.name, file, file.name);

    axios.post('http://localhost:8080/upload', formData).then((res) => {
      file.isUploading = false;
      setFiles([...files, file]).catch((error) => {
        removeFile(file.name);
      });
    });
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
