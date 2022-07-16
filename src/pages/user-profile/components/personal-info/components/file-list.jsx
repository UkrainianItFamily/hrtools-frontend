/* eslint-disable react/prop-types */
import axios from 'axios';

import * as S from '../../../styles';
import FileItem from './file-item';

const UploadedFilesList = ({ files, removeFile }) => {
  const deleteFileHandler = (_name) => {
    axios
      .delete(`http:localhost:8080/upload?name=${_name}`)
      .then((res) => removeFile(_name))
      .catch((error) => console.error(error));
  };
  return (
    <S.fileInputList>
      {files &&
        files.map((file) => (
          <FileItem key={file.name} file={file} deleteFile={deleteFileHandler} />
        ))}
    </S.fileInputList>
  );
};

export default UploadedFilesList;
