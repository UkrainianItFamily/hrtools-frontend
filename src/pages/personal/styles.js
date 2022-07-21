import styled from '@emotion/styled';

export const Main = styled.div`
  display: flex;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const MainLeft = styled.div`
  flex: 0 0 300px;
  padding-right: 25px;
  @media (max-width: 1023px) {
    flex: auto;
    padding-right: 0;
  }
`;

export const MainRight = styled.div`
  flex: 1;
  @media (max-width: 1023px) {
    flex: auto;
  }
`;

export const PersonalBlock = styled.div`
  margin-bottom: 40px;
`;

export const PersonaTitle = styled.h2`
  font-size: 24px;
  border-bottom: 1px dashed #000;
  margin-bottom: 25px;
`;
