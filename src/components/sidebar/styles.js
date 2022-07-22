import styled from '@emotion/styled';

export const Sidebar = styled.div`
  max-width: 250px;
  width: 100%;
  margin-bottom: 25px;
  @media (max-width: 1023px) {
    max-width: initial;
    display: flex;
    align-items: flex-start;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.div`
  margin: 0 auto;
  margin-bottom: -50px;
  position: relative;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border: 2px solid #fff;
  background-image: url(${({ img }) => img});
  @media (max-width: 1023px) {
    margin-right: 25px;
    min-width: 200px;
    margin-bottom: 0;
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    margin-bottom: -50px;
  }
`;

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
  @media (max-width: 1023px) {
    width: 100%;
    padding-top: 25px;
  }
  @media (max-width: 600px) {
    padding-top: 65px;
  }
`;

export const Contacts = styled.div`
  margin-bottom: 25px;
  @media (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
`;

export const ContactsItem = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 16px;
  align-items: center;

  svg {
    margin-right: 5px;
  }
  @media (max-width: 1023px) {
    margin-right: 15px;
    margin-bottom: 15px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const Data = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  @media (max-width: 1023px) {
    margin-bottom: 0;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const DataItem = styled.div`
  font-weight: 400;
`;
