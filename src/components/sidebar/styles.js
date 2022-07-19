import styled from '@emotion/styled';

export const Sidebar = styled.div`
  max-width: 250px;
  width: 100%;
  margin-bottom: 25px;
`;

export const Avatar = styled.div((props) => ({
  margin: '0 auto',
  marginBottom: '-50px',
  position: 'relative',
  borderRadius: '100%',
  width: '200px',
  height: '200px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: '2px solid #fff',
  backgroundImage: `url(${props.img})`,
}));

export const AvatarEdit = styled.button`
  position: absolute;
  right: 0;
  top: 15px;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
`;

export const SidebarWrap = styled.div`
  background-color: #e6e6e6;
  padding: 65px 15px 25px;
`;

export const Contacts = styled.div`
  margin-bottom: 25px;
`;

export const ContactsItem = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 16px;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;

export const Data = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
`;

export const DataItem = styled.div`
  font-weight: 400;
`;
