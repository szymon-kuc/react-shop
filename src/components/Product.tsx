import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NewOffer } from './NewOffer';
import { I_Product } from '../interfaces'
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';
import { buyItem } from '../actions/buyItem';

export const Product: React.FC = () => {
    let id = window.location.href.lastIndexOf("/");
    const item_id = window.location.href.substr(id + 1);

    let product: I_Product = {
        _id: "",
        name: "",
        price: 0,
        amount: 0,
        producer: "",
        description: "",
        status: "",
        date: "",
        img: "",
    }

	const dispatch = useDispatch();
	const fetchItemAction = () => dispatch(fetchItems());
	useEffect(() => {
		fetchItemAction();
	},[]);
    const data = useSelector((state: Array<I_Product>) => state.products);
    if(data[0] != null){
       product = data.filter((product: I_Product) => product._id == item_id )[0];
    }
    const buyItemAction = (id: string) => dispatch(buyItem(id));

    const HandleBuyItem = () => {
        const data = localStorage.getItem('basket');
        const newData: Array<string> = data === null ? "" : JSON.parse(data);
        let isInBasket = false;
        newData.map((id: string) => {
        if(id === item_id){
            isInBasket = true;
        }
        return id;
        });
        if(isInBasket == false){
            buyItemAction([...newData, item_id]);
        }
        const newJSON = isInBasket === false ? [...newData, item_id] : newData;
        localStorage.setItem('basket', JSON.stringify(newJSON));
    }
	return (
        <>
        <section className="product">
            <section className="product-buttons">
                <div>         
                    <Button variant="contained" className="buttonP" startIcon={<ArrowBackIosIcon />}>
                        Poprzednie
                    </Button>
                </div>
                <div>Data wystawienia: {product.date}</div>
                <div>         
                    <Button variant="contained" className="buttonP" endIcon={<ArrowForwardIosIcon />}>
                        Następne
                    </Button>
                </div>
            </section>
            <article className="product-header">
                <figure className="product-img">
                    <img src={"http://34.89.250.147:3000/" + product.img} style={{maxHeight: "600px"}} alt=""/>
                </figure>
                <h1 className="product-title">{product.name}</h1>
                <div className="product-price-buy">
                    <div className="product-price">{product.price} zł</div>
                    <div className="product-buy">
                        <Button variant="contained" className="button" onClick={() => HandleBuyItem()} startIcon={<ShoppingCartIcon />}>
                            Kup
                        </Button>
                    </div>
                </div>
            </article>
            <article className="product-info">
                <p>Sprzedawca: {product.producer}</p>
                <p>Stan: {product.status}</p>
            </article>
            <article className="advert">
                Miejsce na reklame
            </article>
            <article className="description">
                <p>
                    {product.description}
                </p>
            </article>
            <h1 className="similar-offers">Podobne oferty:</h1>
            <section className="new-offers-grid">
                {data.map((product: I_Product)=> <NewOffer key={product._id} product={product}/> )}
			</section>
        </section>
        </>
	);
}