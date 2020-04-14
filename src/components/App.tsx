import React from 'react';
import { NavBar } from './NavBar';
import ProductsList from './ProductsList';
import '../../assets/style.css';
import { Provider } from 'react-redux';
import { AddNewItem } from './AddNewItem';
import { store } from './store';
import { Footer } from './Footer';
import { Aside } from './Aside';

export const App: React.FC = () => {
	return (
	<Provider store={store}>
		<div className="container">
			<NavBar />
			<div className="main">
				<section>
				<ProductsList />
				<AddNewItem />
				</section>
				<Aside />
				<Footer/>
			</div>
		</div>
	</Provider>
	);
}