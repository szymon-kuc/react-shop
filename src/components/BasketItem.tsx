import React, {useState} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = withStyles({
    root: {
      '&$checked': {
        color: "#708090;",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export const BasketItem: React.FC = () => {
  const [price, setPrice] = useState(250000);
  const price1 = 250000;
	return (
    <div className="basket-item-container">
      <div><CustomCheckbox/></div>
      
      <section className="basket-item">
            <h4 className="basket-item-alienor">Sprzedający: Andrzej Nowak</h4>
            <div className="basket-item-flex">
                <figure className="basket-item-image" style={{backgroundImage:`url(${'https://katalogmarzen.pl/img/products/1/2019_04/bmw-i8-2.jpg'})`}}>
                </figure>
                <div className="basket-item-name-status">
                <h2 className="basket-item-name">BMW i8</h2>
                <p>● stan: używany</p>
                </div>
                
                <div className="basket-item-amount">
                    <FormControl variant="filled">
                    <NativeSelect
                        name="age"
                        inputProps={{ 'aria-label': 'age' }}
                        onChange={(e: any) => setPrice(price1*e.target.value)}
                        >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className="basket-item-price">{price}zł</div>
                <div className="basket-item-delete">
                    <IconButton color="inherit"> <DeleteIcon /></IconButton>
                </div>
            </div>
        </section>
    </div>
	);
}