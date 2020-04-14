import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

export const Footer: React.FC = () => {
	return (
        <div className="footer">
        <AppBar position="static">
            <Toolbar className="fotterBar">
                <Typography align="center" className="copy">
                    &copy; 2020 - Szymon Kuc
                </Typography>
            </Toolbar>
        </AppBar> 
      </div>
	);
}