import React from 'react';
import { NavBar } from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../assets/style.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Shop } from './Shop';
import { Home } from './Home';
import { Footer } from './Footer';

export const App: React.FC = () => {
	return (
	<Provider store={store}>
		<Router>
		<NavBar />
		<div className="container">
				<Route path='/' render={() => <Home />} exact/>
                <Route path='/shop' render={() => <Shop />} exact/>
		</div>
		<Footer/>
		</Router>
	</Provider>
	);
}