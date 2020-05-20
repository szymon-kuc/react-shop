import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { CategoryItem } from  './CategoryItem';

interface I_Category {
	category: string;
}

export const Category: React.FC<I_Category> = ({category}) => {
	return (
        <div className="category-container">
			<article className="search">
				<div className="category-search-input">
					<TextField id="standard-basic" className="input" label="Szukaj..." />
					<TextField id="standard-basic" className="input input-category" label="Cena" placeholder="Od"           InputLabelProps={{
						shrink: true,
					}}/>
					<TextField id="standard-basic" className="input input-category" placeholder="Do" />
				</div>
				<Button variant="contained" className="button category-button" endIcon={<SearchIcon />}>
					Szukaj
				</Button>
			</article>
			<section>
				<h1 className="category-name">{category}</h1>
				<section>
					<CategoryItem />
				</section>
			</section>
        </div>
	);
}