import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { I_Shop } from '../interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../actions/deleteItem';
import { editItem } from '../actions/editItem';
import { buyItem } from '../actions/buyItem';
import { EditItem } from './EditItem';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const deleteItemAction = (id: number) => dispatch(deleteItem(id));
  const editItemAction = (item: I_Shop) => dispatch(editItem(item));
  const buyItemAction = (item: any) => dispatch(buyItem(item));

  const itemsList = useSelector((state: any) => state.items);

  const deleteElement = (id: number) => {
    deleteItemAction(id);
    const newData = itemsList.filter((item: I_Shop) => item.id !== id);
    localStorage.setItem('data', JSON.stringify(newData));
  }
  const buyElement = (item: I_Shop) => {
    const data = localStorage.getItem('basket');
    const newData = data === null ? "" : JSON.parse(data);
    let isInBasket = false;
    newData.map((el: I_Shop) => {
      if(el.id === item.id){
        el.amount = parseInt(el.amount)+1;
        isInBasket = true;
      }
      return el;
    });
    const newJSON = isInBasket === false ? [...newData, item] : newData;
    buyItemAction(newJSON);
    localStorage.setItem('basket', JSON.stringify(newJSON));
  }

  return (
    <section className="main-table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numer</TableCell>
              <TableCell align="justify">Nazwa</TableCell>
              <TableCell align="justify">Cena</TableCell>
              <TableCell align="justify">Ilość</TableCell>
              <TableCell align="justify">Producent</TableCell>
              <TableCell align="justify">Edytuj</TableCell>
              <TableCell align="justify">Usuń</TableCell>
              <TableCell align="justify">Kup</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsList !== null && itemsList.map((row: I_Shop) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                {row.active === 0 ? <EditItem item={row}/> : 
                <>
                <TableCell align="justify">{row.name}</TableCell>
                <TableCell align="justify">{row.price}</TableCell>
                <TableCell align="justify">{row.amount}</TableCell>
                <TableCell align="justify">{row.producer}</TableCell>
                <TableCell align="justify"><IconButton color="inherit" onClick={() => editItemAction({...row, active: 0})}><EditIcon /></IconButton></TableCell></>
                }
                <TableCell align="justify"><IconButton color="inherit" onClick={() => deleteElement(row.id)}> <DeleteIcon /></IconButton></TableCell>
                <TableCell align="justify"><IconButton color="inherit" onClick={()=> buyElement(row)}><ShoppingBasketIcon /></IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
