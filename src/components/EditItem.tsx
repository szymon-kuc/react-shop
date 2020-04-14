import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { editItem } from '../actions/editItem';
import { I_Shop } from '../interfaces';

interface I_EditItem_Props  {
    item: I_Shop
}

export const EditItem: React.FC<I_EditItem_Props> = ({item}) => {
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [amount, setAmount] = useState(item.amount);
    const [producer, setProducer] = useState(item.producer);
    const [errP, setErrP] = useState(false);
    const [errA, setErrA] = useState(false);
    const dispatch = useDispatch();
    const editItemAction = (el: I_Shop) => dispatch(editItem(el));

    const edit = () => {
        if(!isNaN(price) && !isNaN(amount)){
            const newItem = {id: item.id, name:name, price: price, amount: amount, producer: producer, active:1, img:item.img};
            const newData = JSON.parse(localStorage.getItem('data'));
            const editJSON = newData.map((el: any) => {
                    if(el.id==newItem.id){
                        el = newItem;
                    }
                    return el;
                });
            localStorage.setItem('data', JSON.stringify(editJSON));
            editItemAction(newItem);
        }

    }
	return (
	<>
        <TableCell align="justify"><TextField id="outlined-basic" label="Nazwa" variant="outlined" value={name} onChange={(e: any) => setName(e.target.value)} /></TableCell>
        <TableCell align="justify"><TextField error={errP} helperText={errP===true ? "Podaj liczbe!" : ""} id="outlined-basic" label="Cena" variant="outlined" value={price} onChange={(e: any) => {setPrice(e.target.value); isNaN(price) ? setErrP(true) : setErrP(false)}}/></TableCell>
        <TableCell align="justify"><TextField error={errA} helperText={errA===true ? "Podaj liczbe!" : ""} id="outlined-basic" label="Ilość" variant="outlined" value={amount}  onChange={(e: any) =>{ setAmount(e.target.value);  isNaN(amount) ? setErrA(true) : setErrA(false)}}/></TableCell>
        <TableCell align="justify"><TextField id="outlined-basic" label="Producent" variant="outlined" value={producer} onChange={(e: any) => setProducer(e.target.value)}/></TableCell>
        <TableCell align="justify"><IconButton color="inherit" onClick={() => edit()}> <EditIcon /> </IconButton></TableCell>
	</>
	);
}