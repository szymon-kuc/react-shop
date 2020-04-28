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

export const App: React.FC = () => {
	return (
	<Provider store={store}>
		<Router basename="/react-shop">
		<NavBar />
		<div className="container">
			<Switch>
				<Route path='/' render={() => <Home />}/>
                <Route path='/shop' render={() => <Shop />}/>
				<Route path='/produkt' render={() => <Product />}/>
			</Switch>
		</div>
		<Footer />
		</Router>
	</Provider>
	);
}