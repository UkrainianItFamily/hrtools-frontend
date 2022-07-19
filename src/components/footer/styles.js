import styled from '@emotion/styled';

/* main container, holding aside amd board */

export const Footer = styled.div`
  padding: 25px 0;
  background-color: #808080;
`;

export const FooterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FooterMenu = styled.ul`
  margin-right: 25px;
  mix-blend-mode: 15px;
`;

export const FooterLi = styled.li`
  margin-bottom: 15px;
  & a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #dfdfdf;
    }
  }
`;
