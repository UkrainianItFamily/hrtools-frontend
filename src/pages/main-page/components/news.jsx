import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { placeholder } from 'src/assets/images/';

import * as S from '../styles';

const News = () => {
  const matches600 = useMediaQuery('(max-width:600px)');

  return (
    <>
      <S.MainTop>
        <S.MainTopTitle>
          <NewspaperIcon />
          Новини
        </S.MainTopTitle>
        <S.MainTopLink to="news">
          Дивитися всі
          <ArrowForwardIcon />
        </S.MainTopLink>
      </S.MainTop>
      <S.NewsWrap>
        <S.NewsItem>
          <S.NewsItemImg>
            <img src={placeholder} alt="img" />
          </S.NewsItemImg>
          <S.NewsItemWrap>
            <S.NewsItemLeft>
              <S.NewsItemTitle>Very loooong Title</S.NewsItemTitle>
              <S.NewsItemText>
                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industr&apos;s standard dummy text ever since the 1500s, when a
              </S.NewsItemText>
            </S.NewsItemLeft>
            <Link to="/">
              <Button fullWidth={matches600} variant="contained">
                Детальніше
              </Button>
            </Link>
          </S.NewsItemWrap>
        </S.NewsItem>

        <S.NewsItem>
          <S.NewsItemImg>
            <img src={placeholder} alt="img" />
          </S.NewsItemImg>
          <S.NewsItemWrap>
            <S.NewsItemLeft>
              <S.NewsItemTitle>Title</S.NewsItemTitle>
              <S.NewsItemText>
                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industr&apos;s standard dummy text ever since the 1500s, when a
              </S.NewsItemText>
            </S.NewsItemLeft>
            <Link to="/">
              <Button fullWidth={matches600} variant="contained">
                Детальніше
              </Button>
            </Link>
          </S.NewsItemWrap>
        </S.NewsItem>
      </S.NewsWrap>
    </>
  );
};

export default News;
