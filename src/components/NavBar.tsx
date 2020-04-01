import React, { useState } from 'react';
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
          <Typography variant="h6" align="center" className="header-txt">
            SHOP
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