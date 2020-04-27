import React from 'react';
export const NewOffer: React.FC = () => {
	return (
        <div className="new-offer">
            <figure className="new-offer-img">
                <img src="../../assets/bmw.jpg" alt=""/>
            </figure>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="new-offer-price">255zł</p>
        </div>
	);
}