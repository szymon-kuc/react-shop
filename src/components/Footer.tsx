import React from 'react';

export const Footer: React.FC = () => {
	return (
      <section className="footer">
          <div className="footer-navigation">
            <div className="logo">E-SKLEP</div>
              <ul>
                <li>O nas</li>
                <li>Kontakt</li>
                <li>Reklamacje</li>
                <li>Pomoc</li>
              </ul>
          </div>
          <p className="copyRight">Szymon Kuc - &copy; 2020</p>
      </section>
	);
}