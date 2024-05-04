import styled from 'styled-components';
import Header from './header';
import { LayoutDefaultProps } from '../../utils/@types';

export default function DefaultLayout({ children }: LayoutDefaultProps) {
  return (
    <Container>
      <Header />
      <ContentsWrapper>
        <Body>{children}</Body>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ContentsWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Body = styled.div`
  width: 100%;
`;
