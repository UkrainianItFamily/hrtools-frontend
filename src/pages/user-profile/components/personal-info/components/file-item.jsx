/* eslint-disable react/prop-types */
import { images } from 'src/assets';

import * as S from '../../../styles';
import FileSpinner from './file-spinner';

const FileItem = ({ file, deleteFile }) => (
  <S.fileInputListItem key={file.name}>
    <S.fileInputListFileIcon src={images.resumeIcon} />
    <S.fileInputListItemText>{file.name}</S.fileInputListItemText>
    <S.fileInputListActionsContainer>
      {file.isUploading ? (
        <FileSpinner />
      ) : (
        <S.fileInputListFileDeleteIcon
          src={images.fileRemoveIcon}
          onClick={() => deleteFile(file.name)}
        />
      )}
    </S.fileInputListActionsContainer>
  </S.fileInputListItem>
);

export default FileItem;
