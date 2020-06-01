import React from 'react';
import { NavLink } from 'react-router-dom';
import { I_Product } from 'interfaces';

interface I_NewOffer_Props {
    product: I_Product
}
export const NewOffer: React.FC<I_NewOffer_Props> = ({product}) => {
	return (
        <NavLink to="/produkt">
            <div className="new-offer">
                <figure className="new-offer-img" style={{backgroundImage:`url(http://34.89.250.147:3000/${product.img})`}}>
                </figure>
                <p>{product.name}</p>
                <p className="new-offer-price">{product.price} zł</p>
            </div>
        </NavLink>
	);
}