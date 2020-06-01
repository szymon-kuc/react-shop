import React, {useState} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { I_Product } from '../interfaces';

const CustomCheckbox = withStyles({
    root: {
      '&$checked': {
        color: "#708090;",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  
  interface I_BasketItem_Props {
    product: I_Product
  }

export const BasketItem: React.FC<I_BasketItem_Props> = ({product}) => {
  const [price, setPrice] = useState(product.price);
	return (
    <div className="basket-item-container">
      <div><CustomCheckbox/></div>
      
      <section className="basket-item">
          <h4 className="basket-item-alienor">Sprzedający: {product.producer}</h4>
            <div className="basket-item-flex">
                <figure className="basket-item-image" style={{backgroundImage:`url(http://34.89.250.147:3000/${product.img})`}}>
                </figure>
                <div className="basket-item-name-status">
                <h2 className="basket-item-name">{product.name}</h2>
                <p>● stan: {product.status}</p>
                </div>
                
                <div className="basket-item-amount">
                    <FormControl variant="filled">
                    <NativeSelect
                        name="age"
                        inputProps={{ 'aria-label': 'age' }}
                        onChange={(e: any) => setPrice(product.price*e.target.value)}
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