import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const MainRightBlock = styled.div`
  margin-bottom: 50px;
`;

export const MainTop = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainTopTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  svg {
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const MainTopLink = styled(Link)`
  display: flex;
  align-items: center;
  svg {
    margin-left: 15px;
    transition: 0.3s all;
  }
  &:hover {
    text-decoration: underline;
  }
  &:hover svg {
    transform: translateX(2px);
  }
  @media (max-width: 600px) {
    font-size: 14px;
    svg {
      margin-left: 5px;
    }
  }
`;
export const NewsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (max-width: 600px) {
    gap: 50px;
  }
`;
export const NewsItem = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const NewsItemImg = styled.div`
  flex: 0 0 150px;
  padding-right: 15px;
  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 600px) {
    flex: auto;
    width: 350px;
    max-width: 100%;
    margin: 0 auto;
    padding-right: 0;
    margin-bottom: 25px;
  }
`;

export const NewsItemWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  a {
    display: block;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    flex: auto;
    align-items: flex-start;
    justify-content: flex-start;
    a {
      width: 100%;
    }
  }
`;

export const NewsItemLeft = styled.div`
  margin-right: 15px;
  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export const NewsItemTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const NewsItemText = styled.div`
  font-size: 16px;
  max-width: 500px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const PollTable = styled.div`
  width: 100%;
`;
