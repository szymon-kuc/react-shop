import React from 'react';
import ProductsList from './ProductsList';
import '../../assets/style.css';
import { AddNewItem } from './AddNewItem';
import { Aside } from './Aside';

export const Shop: React.FC = () => {
	return (
		<div className="main">
			<section>
				<ProductsList />
				<AddNewItem />
			</section>
			<Aside />
		</div>
	);
}