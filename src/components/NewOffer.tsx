import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../../assets/bmw.jpg'

export const NewOffer: React.FC = () => {
	return (
        <NavLink to="/produkt">
            <div className="new-offer">
                <figure className="new-offer-img">
                    <img src={Image} alt=""/>
                </figure>
                <p>BMW i8</p>
                <p className="new-offer-price">450 000 zł</p>
            </div>
        </NavLink>
	);
}