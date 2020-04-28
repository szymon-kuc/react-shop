import React from 'react';
import { NavLink } from 'react-router-dom';
export const NewOffer: React.FC = () => {
	return (
        <NavLink to="/produkt">
            <div className="new-offer">
                <figure className="new-offer-img">
                    <img src="../../assets/bmw.jpg" alt=""/>
                </figure>
                <p>BMW i8</p>
                <p className="new-offer-price">450 000 zł</p>
            </div>
        </NavLink>
	);
}