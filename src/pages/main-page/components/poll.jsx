import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

import * as S from '../styles';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('status', 'Опитування 1', '12.07.2022', 'активне', 'link'),
  createData('status', 'Опитування 2', '12.07.2022', 'активне', 'link'),
  createData('status', 'Опитування 3', '12.07.2022', 'активне', 'link'),
  createData('status', 'Опитування 4', '12.07.2022', 'активне', 'link'),
  createData('status', 'Опитування 5', '12.07.2022', 'активне', 'link'),
];
const Poll = () => (
  <>
    <S.MainTop>
      <S.MainTopTitle>
        <NewspaperIcon />
        Мої опитування
      </S.MainTopTitle>
      <S.MainTopLink to="poll">
        Дивитися всі
        <ArrowForwardIcon />
      </S.MainTopLink>
    </S.MainTop>
    <S.PollTable>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">Назва</TableCell>
              <TableCell align="left">Дата</TableCell>
              <TableCell align="left">Статус</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.calories}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <CheckCircleOutlineIcon />
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">
                  <Link to="/">
                    <Button variant="contained">Детальніше</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.PollTable>
  </>
);

export default Poll;
