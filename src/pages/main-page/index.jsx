import { Footer, Header, Sidebar } from 'src/components';
import * as GS from 'src/global-styles';

import { News, Poll } from './components';
import * as S from './styles';

const mainPage = () => (
  <GS.MainWrap>
    <Header pageName="Головна" />
    <GS.Wrap>
      <S.Main>
        <S.MainLeft>
          <Sidebar />
        </S.MainLeft>
        <S.MainRight>
          <S.MainRightBlock>
            <News />
          </S.MainRightBlock>
          <S.MainRightBlock>
            <Poll />
          </S.MainRightBlock>
        </S.MainRight>
      </S.Main>
    </GS.Wrap>

    <Footer />
  </GS.MainWrap>
);

export default mainPage;
