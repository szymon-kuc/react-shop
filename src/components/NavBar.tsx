import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';
import { Basket } from './Basket';

export const NavBar: React.FC = () => {
  const [basket, setBasket] = useState(false);
  const basketList = useSelector((state: any) => state.basket);

	return (
	<div>
		<AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h5" align="center" className="header-txt">
          <NavLink to={'/'} >
                OnlineShop
            </NavLink>
          </Typography>
          <Typography variant="h6">
            <NavLink to={'/shop'} >
                Sklep
            </NavLink>
          </Typography>
          <Typography variant="h6">
            <NavLink to={'/kontakt'} >
                Kontakt
            </NavLink>
          </Typography>
          <IconButton edge="end" color="inherit" className="basket" onClick={() => basket === true ? setBasket(false) : setBasket(true)}>
            <Badge badgeContent={basketList.length} color="secondary"><ShoppingBasketIcon /></Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {basket === true && <Basket />}
	</div>
	);
}