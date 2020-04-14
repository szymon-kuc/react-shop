import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import {addNewItem} from '../actions/addItem';

export const AddNewItem: React.FC = () => {
    //const [img, setImg] = useState('');
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [producer, setProducer] = useState("");
    const [err, setErrA] = useState(false);
    const [errP, setErrP] = useState(false);

    const dispatch = useDispatch();
    const addItemAction = (item: any) => dispatch(addNewItem(item));
    let img = '';

    const fetchImg = () => fetch('https://pixabay.com/api/?key=16039764-750c701b83e0148c80accee72&q='+name+'&image_type=photo&pretty=true')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        try{
            console.log(data.hits[0].previewURL);
            img = data.hits[0].previewURL;
            addItem();
        }
        catch{
            addItem();
        }

    });

    const addItem = () => {
        if(!isNaN(price) && !isNaN(amount)){
            const data = localStorage.getItem('data');
            const newData = data === null ? "" : JSON.parse(data);
            const id = newData.length > 0 ? newData[newData.length-1].id+1 : 1;
            const item = {id:id, name:name, price:price , amount:amount, producer:producer, active:1, img:img };
            const newJSON = [...newData, item];
            addItemAction(newJSON);
            localStorage.setItem('data', JSON.stringify(newJSON));
        }
    }
	return (
        <section className="add">
            <div className="add-inputs">
                <TextField  id="outlined-basic" label="Nazwa" variant="outlined" className="input" onChange={(e: any) => setName(e.target.value)} />
                <TextField error={errP} helperText={errP===true ? "Podaj liczbe!" : ""} id="outlined-basic" label="Cena" variant="outlined" className="input"onChange={(e: any) => {setPrice(e.target.value); isNaN(price) ? setErrP(true) : setErrP(false)}}/>
                <TextField id="outlined-basic" error={err} helperText={err===true ? "Podaj liczbe!" : ""} label="Ilość" variant="outlined" className="input" onChange={(e: any) => {setAmount(e.target.value); isNaN(amount) ? setErrA(true) : setErrA(false)}}/>
                <TextField id="outlined-basic" label="Producent" variant="outlined" className="input" onChange={(e: any) => setProducer(e.target.value)}/>
                <Button variant="contained" size="medium" color="primary" onClick={fetchImg}>
                     Dodaj
                </Button>
            </div>
        </section>
	);
}