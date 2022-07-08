import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
`;
