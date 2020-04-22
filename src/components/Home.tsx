import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Aside } from './Aside';
import Slider from '@farbenmeer/react-spring-slider';
import Card from '@material-ui/core/Card';

export const Home: React.FC = () => {
	return (
		<>
		<div className="slider">
		<Slider hasBullets bulletStyle={{backgroundColor: '#000'}}>
			<div className="ad1">
			<Typography variant="h4">
					Kupuj aż o 1% taniej z kodem rabatowym "SUPER" (*tylko wybrane artykuły)
				</Typography>
			</div>
			<div className="ad1 ad2">
			<Typography variant="h4">
					Jesteśmy najszybciej rozwijającą się firmą na rynku!
				</Typography>
			</div>
			<div>child 3</div>
		</Slider>  
	</div>
			<section className="main">
				<article>
				<Card>
						<Typography variant="h4" className="about">
							O Nas
						</Typography>
						<Typography variant="h6" className="about-txt">
							Na naszej witrynie możesz być zarówno sprzedającm jak i kupującym. Wybieraj z setek ofert, sprzedawaj co tylko chcesz!
						</Typography>
				</Card>
				
					<Typography variant="h5" className="new-title">
						Ostatnio dodane produkty:
					</Typography>
					<article className="new-products">
						<div>
							<Typography variant="h5">Tesla Roadster</Typography>
							<img className="home-img" src="../../assets/tesla.jpg" alt=""/>
						</div>
						<div>
							<Typography variant="h5">BMW i8</Typography>
							<img className="home-img" src="../../assets/bmw.jpg" alt=""/>
						</div>
						<div>
							<Typography variant="h5">Lamborghini</Typography>
							<img className="home-img" src="../../assets/ciagnik.jpg" alt=""/>
						</div>
						<div>
							<Typography variant="h5">Porshe 911</Typography>
							<img className="home-img" src="../../assets/porshe.jpg" alt=""/>
						</div>
					</article>
				</article>
				<aside>
					<Aside />
				</aside>
			</section>
			</>
	);
}