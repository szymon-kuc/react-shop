import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button'
import { BasketItem } from './BasketItem';
import { I_Product } from '../interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';
import { deleteItemBasket } from '../actions/deleteItemBasket';

export const BasketPage: React.FC = () => {
    const [itemPrice, setItemPrice] = useState(0);
    let totalPrice = 0;
    const dispatch = useDispatch();
    const fetchItemAction = () => dispatch(fetchItems());
    let products = [{
        _id: "",
        name: "",
        price: 0,
        amount: 0,
        producer: "",
        description: "",
        status: "",
        date: "",
        img: "",
    }]
    const deleteItemAction = (id: string) => dispatch(deleteItemBasket(id));

    const deleteElement = (_id: any) => {
      deleteItemAction(_id);
      const newData = basketList.filter((id: string) => id !== _id);
      localStorage.setItem('basket', JSON.stringify(newData));
    }
    const priceChange = (price: number) => {
        console.log(price, "PRICE");
        setItemPrice((totalPrice) + price);
    }

	useEffect(() => {
        fetchItemAction();
    },[]);

    const data = useSelector((state: Array<I_Product>) => state.products);
    let basketList = useSelector((state: any) => state.basket);
    if(!Array.isArray(basketList)){
        basketList = [basketList];
    }
    
    if(data[0] != null){
        products = data.filter((el: I_Product) => basketList.includes(el._id));
        for(const product of products){
            totalPrice += product.price;
        }  
    }
	return (
        <section className="basket-container">
            <h1>Twój koszyk</h1>
            <div className="basket-main">
                <article className="basket-items">
                    {products.map((product: I_Product) => <BasketItem key = {product._id} product={product} deleteI={(id: any)  => deleteElement(id)} totalPrice={(price: number) => priceChange(price)}/>)}
                </article>
                <aside className="basket-buy">
                    <div className="basket-buy-amount"> 
                    <p>Do zapłaty</p>
                    <h2>{itemPrice == 0 ? totalPrice : itemPrice} zł</h2>
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