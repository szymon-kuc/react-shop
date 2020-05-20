import React from 'react';
import { NewOffer } from './NewOffer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TvIcon from '@material-ui/icons/Tv';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { NavLink } from 'react-router-dom';

export const Home: React.FC = () => {
	return (
		<>
		<section className="navigation">
			<div className="home-container">
				<article className="search">
					<div className="search-input">
						<TextField id="standard-basic" className="input" label="Szukaj..." />
					</div>
					<Button variant="contained" className="button" endIcon={<SearchIcon />}>
						Szukaj
					</Button>
				</article>
				<div className="categories"> 
				
					<div className="category">
						<NavLink className="category-menu-item" to = '/motoryzacja'><Avatar className="avatar"><DriveEtaIcon /></Avatar> &nbsp;&nbsp;&nbsp; Motoryzacja</NavLink>
					</div>
					<div className="category">
						<NavLink className="category-menu-item" to = '/elektronika'><Avatar className="avatar"><TvIcon /></Avatar> &nbsp;&nbsp;&nbsp; Elektronika</NavLink>
					</div>
					<div className="category">
					<NavLink className="category-menu-item" to = '/moda'><Avatar className="avatar"><FaceIcon /></Avatar> &nbsp;&nbsp;&nbsp; Moda</NavLink>
					</div>
					<div className="category">
						<NavLink className="category-menu-item" to = '/dom'><Avatar className="avatar"><HomeIcon /></Avatar> &nbsp;&nbsp;&nbsp; Dom</NavLink>
					</div>
					<div className="category">
						<NavLink className="category-menu-item" to = '/zwierzeta'><Avatar className="avatar"><PetsIcon /></Avatar> &nbsp;&nbsp;&nbsp; Zwierzęta</NavLink>
					</div>
					<div className="category">
						<NavLink className="category-menu-item" to = '/sport'><Avatar className="avatar"><SportsBasketballIcon /></Avatar> &nbsp;&nbsp;&nbsp; Sport</NavLink>
					</div>
				</div>
			</div>
		</section>
		<section className="new-offers">
			<h2>Ostatnio dodane ogłoszenia</h2>
			<section className="new-offers-grid">
				<NewOffer />
				<NewOffer />
				<NewOffer />
				<NewOffer />
				<NewOffer />
				<NewOffer />
			</section>
		</section>
		</>
	);
}