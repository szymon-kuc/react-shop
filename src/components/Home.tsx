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
						<Avatar className="avatar"><DriveEtaIcon /></Avatar> &nbsp;&nbsp;&nbsp; Motoryzacja
					</div>
					<div className="category">
						<Avatar className="avatar"><TvIcon /></Avatar> &nbsp;&nbsp;&nbsp; Elektronika
					</div>
					<div className="category">
						<Avatar className="avatar"><FaceIcon /></Avatar> &nbsp;&nbsp;&nbsp; Moda
					</div>
					<div className="category">
						<Avatar className="avatar"><HomeIcon /></Avatar> &nbsp;&nbsp;&nbsp; Dom
					</div>
					<div className="category">
						<Avatar className="avatar"><PetsIcon /></Avatar> &nbsp;&nbsp;&nbsp; Zwierzęta
					</div>
					<div className="category">
						<Avatar className="avatar"><SportsBasketballIcon /></Avatar> &nbsp;&nbsp;&nbsp; Sport
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