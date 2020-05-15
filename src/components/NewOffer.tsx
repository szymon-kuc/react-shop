import React from 'react';
import { NavLink } from 'react-router-dom';

export const NewOffer: React.FC = () => {
    const data: any = {
        id: 1,
        img: "https://raw.githubusercontent.com/szymon-kuc/react-shop/master/docs/81b0d10df8447311b55daeb1225bbd55.jpg",
        name: "Bmw i8",
        price: 250000,
    }
	return (
        <NavLink to="/produkt">
            <div className="new-offer">
                <figure className="new-offer-img" style={{backgroundImage:`url(${data.img})`}}>
                </figure>
                <p>{data.name}</p>
                <p className="new-offer-price">{data.price} zł</p>
            </div>
        </NavLink>
	);
}