import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { I_Shop } from '../interfaces';
import { deleteItemBasket } from '../actions/deleteItemBasket';
import Typography from '@material-ui/core/Typography';

export const Basket: React.FC = () => {

  const basketList = useSelector((state: any) => state.basket);
  const dispatch = useDispatch();
  const deleteItemAction = (id: number) => dispatch(deleteItemBasket(id));

  const deleteElement = (id: number) => {
    deleteItemAction(id);
    const newData = basketList.filter((item: I_Shop) => item.id !== id);
    localStorage.setItem('basket', JSON.stringify(newData));
  }

	return (
	<div className="basket-list">
          <Typography variant="h5" gutterBottom align="center">KOSZYK</Typography>
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numer</TableCell>
              <TableCell align="justify">Nazwa</TableCell>
              <TableCell align="justify">Cena</TableCell>
              <TableCell align="justify">Ilość</TableCell>
              <TableCell align="justify">Producent</TableCell>
              <TableCell align="justify">Usuń</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basketList !== null && basketList.map((row: I_Shop) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell align="justify">{row.name}</TableCell>
                <TableCell align="justify">{row.price}</TableCell>
                <TableCell align="justify">{row.amount}</TableCell>
                <TableCell align="justify">{row.producer}</TableCell>
                <TableCell align="justify"><IconButton color="inherit" onClick={()=>deleteElement(row.id)}> <DeleteIcon /></IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
	</div>
	);
}