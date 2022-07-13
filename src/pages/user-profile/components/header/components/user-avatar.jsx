import { images } from 'src/assets';

import * as S from '../../../styles';

const userAvatar = () => (
  <S.AvatarContainer>
    <S.AvatarEditButton>
      <S.AvatarEditIcon src={images.editIcon} />
    </S.AvatarEditButton>
    <S.Avatar src={images.userPhoto} />
  </S.AvatarContainer>
);

export default userAvatar;
