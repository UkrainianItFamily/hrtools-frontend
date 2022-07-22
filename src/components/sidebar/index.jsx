import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkIcon from '@mui/icons-material/Work';
import { exampleJpg } from 'src/assets/images';

import * as S from './styles';

const Sidebar = () => (
  <S.Sidebar>
    <S.Avatar img={exampleJpg}>
      <S.AvatarEdit>
        <EditIcon sx={{ color: '#fff' }} />
      </S.AvatarEdit>
    </S.Avatar>
    <S.SidebarWrap>
      <S.Contacts>
        <S.ContactsItem>
          <EmailIcon />
          email@email.com
        </S.ContactsItem>
        <S.ContactsItem>
          <PhoneAndroidIcon />
          +380-99-99-931
        </S.ContactsItem>
        <S.ContactsItem>
          <LocationOnIcon />
          Україна, Вінниця
        </S.ContactsItem>
        <S.ContactsItem>
          <AccessTimeIcon />
          Full time
        </S.ContactsItem>
        <S.ContactsItem>
          <WorkIcon />
          web disigner
        </S.ContactsItem>
      </S.Contacts>
      <S.Data>
        Hire data
        <S.DataItem>dec 30, 2018</S.DataItem>
        <S.DataItem>jun 31, 2019</S.DataItem>
      </S.Data>
    </S.SidebarWrap>
  </S.Sidebar>
);

export default Sidebar;
