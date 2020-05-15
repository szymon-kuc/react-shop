import React from 'react';
import { NavBar } from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../assets/style.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Shop } from './Shop';
import { Home } from './Home';
import { Footer } from './Footer';
import { Product } from './Product';
import { BasketPage } from './BasketPage';

export const App: React.FC = () => {
	return (
	<Provider store={store}>
		<Router basename="react-shop">
		<NavBar />
		<div className="container">
			<Switch>
				<Route path='/' exact component={() => <Home />}/>
                <Route path='/shop' exact component={() => <Shop />}/>
				<Route path='/produkt' exact component={() => <Product />}/>
				<Route path='/koszyk' exact component={() => <BasketPage />}/>
			</Switch>
		</div>
		<Footer />
		</Router>
	</Provider>
	);
}