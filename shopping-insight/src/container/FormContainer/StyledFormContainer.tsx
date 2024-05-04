import styled from 'styled-components';
import { flex } from '../../styles';

export const StyledFormContainer = styled.div`
  ${flex('center', 'center', 'column')}
  margin-top: 3rem;
  gap: 3rem;
`;

export const StyledSelectWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
