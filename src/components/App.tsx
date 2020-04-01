import React from 'react';
import { NavBar } from './NavBar';
import ProductsList from './ProductsList';
import '../../assets/style.css';
import { Provider } from 'react-redux';
import { AddNewItem } from './AddNewItem';
import { store } from './store';

export const App: React.FC = () => {

	// const newData = JSON.parse(localStorage.getItem('data'));
	// const item = {id:2, name:"lol", price:20 , amount:2, producer:"XD" };
	// const newJSON = [...shop, item];
	// const editJSON = shop.map((el) => {
	// 	if(el.id==item.id){
	// 		el = item;
	// 	}
	// 	return el;
	// })
	// localStorage.setItem('data', JSON.stringify(newJSON));
	// console.log(newData);
	// const newData2 = JSON.parse(localStorage.getItem('data'));
	// console.log(newData2);
	// localStorage.setItem('data', JSON.stringify(editJSON));
	// const newData3 = JSON.parse(localStorage.getItem('data'));
	// console.log(newData3);
	return (
	<Provider store={store}>
		<div className="container">
			<NavBar />
			<ProductsList />
			<AddNewItem />
		</div>
	</Provider>
	);
}