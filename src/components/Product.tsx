import React from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NewOffer } from './NewOffer';
import { Offer } from '../interfaces'

export const Product: React.FC = () => {
    const data: Offer = {
        id: 1,
        date: "2020-05-04",
        img: "https://katalogmarzen.pl/img/products/1/2019_04/bmw-i8-2.jpg",
        name: "Bmw i8",
        price: 250000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ipsum dolor, incidunt voluptatem dolores repellendus alias error blanditiis esse at, optio est. Aut quas quaerat ad odio saepe in sapiente!Aliquam vel est provident alias, quas odio! Deleniti aspernatur laudantium nulla, iusto laboriosam ea blanditiis atque temporibus, culpa, modi doloremque expedita. Itaque ducimus porro quis? Laboriosam culpa reprehenderit enim itaque. Atque eius fugiat debitis veniam beatae molestias!",
        alienor: "Andrzej Nowak",
        status: "Używany"
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
                <div>Data wystawienia: {data.date}</div>
                <div>         
                    <Button variant="contained" className="buttonP" endIcon={<ArrowForwardIosIcon />}>
                        Następne
                    </Button>
                </div>
            </section>
            <article className="product-header">
                <figure className="product-img">
                    <img src={data.img} alt=""/>
                </figure>
                <h1 className="product-title">{data.name}</h1>
                <div className="product-price-buy">
                    <div className="product-price">{data.price} zł</div>
                    <div className="product-buy">
                        <Button variant="contained" className="button" startIcon={<ShoppingCartIcon />}>
                            Kup
                        </Button>
                    </div>
                </div>
            </article>
            <article className="product-info">
                <p>Sprzedawca: {data.alienor}</p>
                <p>Stan: {data.status}</p>
            </article>
            <article className="advert">
                Miejsce na reklame
            </article>
            <article className="description">
                <p>
                    {data.description}
                </p>
            </article>
            <h1 className="similar-offers">Podobne oferty:</h1>
            <section className="new-offers-grid">
				<NewOffer />
				<NewOffer />
				<NewOffer />
			</section>
        </section>
        </>
	);
}