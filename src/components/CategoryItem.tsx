import React from 'react';
import { NavLink } from 'react-router-dom';


export const CategoryItem: React.FC = () => {
;
	return (
        <section className="category-item">
             <figure className="category-item-image" style={{backgroundImage:`url(${'https://raw.githubusercontent.com/szymon-kuc/react-shop/master/docs/81b0d10df8447311b55daeb1225bbd55.jpg'})`}}></figure>
             <div className="category-item-details">
                  <NavLink to="/produkt"><h2 className="category-item-name">BMW i8</h2></NavLink>
                <ul className="category-info">
                    <li>Stan: <span>Używany</span></li>
                    <li>Przebieg: <span>50 tys. km</span></li>
                    <li>Rok produkcj: <span>2017</span></li>
                    <li>Pojemność silnika: <span>1 500 cm3</span></li>
                </ul>
                <p className="category-price">
                    250 000 zł
                </p>
             </div>
        </section>
	);
}