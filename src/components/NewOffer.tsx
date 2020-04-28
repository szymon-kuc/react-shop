import React from 'react';
import { NavLink } from 'react-router-dom';

export const NewOffer: React.FC = () => {
	return (
        <NavLink to="/produkt">
            <div className="new-offer">
                <figure className="new-offer-img">
                    <img src="https://raw.githubusercontent.com/szymon-kuc/react-shop/master/docs/81b0d10df8447311b55daeb1225bbd55.jpg" alt=""/>
                </figure>
                <p>BMW i8</p>
                <p className="new-offer-price">450 000 zł</p>
            </div>
        </NavLink>
	);
}