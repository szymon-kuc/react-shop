import React from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NewOffer } from './NewOffer';

export const Product: React.FC = () => {
	return (
        <>
        <section className="product-buttons">
            <div>         
                <Button variant="contained" className="buttonP" startIcon={<ArrowBackIosIcon />}>
                    Poprzednie
                </Button>
            </div>
            <div>         
                <Button variant="contained" className="buttonP" endIcon={<ArrowForwardIosIcon />}>
                    Następne
                </Button>
            </div>
        </section>
        <section className="product">
            <article className="product-header">
                <figure className="product-img">
                    <img src="../../assets/bmw.jpg" alt=""/>
                </figure>
                <h1 className="product-title" >BMW i8</h1>
                <div className="product-price-buy">
                    <div className="product-price">450 000 zł</div>
                    <div className="product-buy">
                        <Button variant="contained" className="button" startIcon={<ShoppingCartIcon />}>
                            Kup
                        </Button>
                    </div>
                </div>
            </article>
            <article className="advert">
                Miejsce na reklame
            </article>
            <article className="description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ipsum dolor, incidunt voluptatem dolores repellendus alias error blanditiis esse at, optio est. Aut quas quaerat ad odio saepe in sapiente!
                    Aliquam vel est provident alias, quas odio! Deleniti aspernatur laudantium nulla, iusto laboriosam ea blanditiis atque temporibus, culpa, modi doloremque expedita. Itaque ducimus porro quis? Laboriosam culpa reprehenderit enim itaque.
                    Atque eius fugiat debitis veniam beatae molestias!
                </p>
                <p>
                    Consectetur minus eaque necessitatibus recusandae est quia nobis eligendi velit reiciendis quidem. Recusandae officia nostrum voluptas ducimus. Ducimus, eius quisquam. Iure, veniam beatae.
                    Nulla, eius temporibus in et suscipit quidem obcaecati incidunt voluptas reiciendis optio velit corrupti illo ab libero numquam deleniti at voluptates molestiae quaerat? Vitae laudantium doloribus at, saepe voluptatem enim.
                    Sunt commodi aliquam vitae dolore. Eum vero maiores, eos odit similique necessitatibus quod, consectetur in impedit debitis perspiciatis ex itaque sit laudantium. Dolor voluptatem reprehenderit aperiam voluptatibus odio quaerat sed!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quibusdam qui temporibus deserunt nesciunt, neque doloremque officia quod exercitationem molestias?
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