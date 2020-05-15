import React from 'react';
import Button from '@material-ui/core/Button'
import { BasketItem } from './BasketItem';

export const BasketPage: React.FC = () => {
	return (
        <section className="basket-container">
            <h1>Twój koszyk</h1>
            <div className="basket-main">
                <article className="basket-items">
                    <BasketItem />
                    <BasketItem />
                    <BasketItem />
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