import React from 'react';

import { NavBar } from './NavBar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import '../../assets/style.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { Home } from './Home';
import { Footer } from './Footer';
import { Product } from './Product';
import { BasketPage } from './BasketPage';
import { Category } from './Category';


export const App: React.FC = () => {

	return (
	<Provider store={store}>
		<Router>
		<NavBar />
		<div className="container">
			<Switch>
				<Route path='/' exact component={() => <Home />}/>
				<Route path='/produkt' component={() => <Product />}/>
				<Route path='/koszyk' exact component={() => <BasketPage />}/>
				<Route path='/motoryzacja' exact component={() => <Category category={"Motoryzacja"}/>}/>
				<Route path='/elektronika' exact component={() => <Category category={"Elektronika"}/>}/>
				<Route path='/moda' exact component={() => <Category category={"Moda"}/>}/>
				<Route path='/dom' exact component={() => <Category category={"Dom"}/>}/>
				<Route path='/zwierzeta' exact component={() => <Category category={"Zwierzeta"}/>}/>
				<Route path='/sport' exact component={() => <Category category={"Sport"}/>}/>
			</Switch>
		</div>
		<Footer />
		</Router>
	</Provider>
	);
}