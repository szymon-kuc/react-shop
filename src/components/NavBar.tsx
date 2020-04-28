import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { Basket } from './Basket';
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const [basket, setBasket] = useState(false);
  const basketList = useSelector((state: any) => state.basket);

	return (
      <header className="navbar">
        <NavLink to="/"><div className="logo">E-SKLEP</div></NavLink>
        <div className="menu-items">
          <div className="nav-item">
            <NavLink to="/shop">
              <Button variant="contained" className="button" startIcon={<AddIcon />}>
                Dodaj Ofertę
              </Button>
            </NavLink>
          </div>
          <div className="nav-item">
            <AccountCircleIcon /> &nbsp; Twoje konto
          </div>
          <div className="nav-item">
          <IconButton edge="end" color="inherit" className="basket" onClick={() => basket === true ? setBasket(false) : setBasket(true)}>
            <Badge badgeContent={basketList.length} color="secondary"><ShoppingBasketIcon /></Badge></IconButton>
          </div> 
        </div>
        {basket === true && <Basket />}
      </header>
       
	);
}