import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NewOffer } from './NewOffer';
import { I_Product } from '../interfaces'
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';

export const Product: React.FC = () => {
	const dispatch = useDispatch();
	const fetchItemAction = () => dispatch(fetchItems());
	useEffect(() => {
		fetchItemAction();
	},[]);
	const data = useSelector((state: Array<I_Product>) => state.products);
    const product = data[0];
    console.log(data)
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
                        <Button variant="contained" className="button" startIcon={<ShoppingCartIcon />}>
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