import { Footer, Header, Sidebar } from 'src/components';
import * as GS from 'src/global-styles';

import { PersonalForm } from './components';
import * as S from './styles';

const Personal = () => (
  <GS.MainWrap>
    <Header pageName="Персональний кабінет" />
    <GS.Wrap>
      <S.Main>
        <S.MainLeft>
          <Sidebar />
        </S.MainLeft>
        <S.MainRight>
          <PersonalForm />
        </S.MainRight>
      </S.Main>
    </GS.Wrap>

    <Footer />
  </GS.MainWrap>
);

export default Personal;
