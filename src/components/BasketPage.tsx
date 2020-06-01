import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button'
import { BasketItem } from './BasketItem';
import { I_Product } from '../interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';

export const BasketPage: React.FC = () => {
    const dispatch = useDispatch();
	const fetchItemAction = () => dispatch(fetchItems());
	useEffect(() => {
		fetchItemAction();
	},[]);
    const data = useSelector((state: Array<I_Product>) => state.products);
    console.log(data);
	return (
        <section className="basket-container">
            <h1>Twój koszyk</h1>
            <div className="basket-main">
                <article className="basket-items">
                    {data.map((product: I_Product) => <BasketItem key={product._id} product={product}/>)}
                </article>
                <aside className="basket-buy">
                    <div className="basket-buy-amount">
                       <p>Do zapłaty</p>
                       <h2>250 000 zł</h2>
                       <span></span>
                       <span>+ wysyłka</span>
                    </div>
                    <div className="basket-buy-button">
                    <Button variant="contained" className="button" >
                        Wybierz dostawę i płatność
                    </Button>
                    </div>
                    <div className="basket-buy-discount"><a>Wprowadź kod rabatowy</a></div>
                </aside>
            </div>
        </section>
	);
}