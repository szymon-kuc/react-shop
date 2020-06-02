import React from 'react';

export const Footer: React.FC = () => {
	return (
      <section className="footer">
          <div className="footer-navigation">
            <div className="logo">E-SKLEP</div>
            <div className="footer-menu">
              <ul>
                <li>O nas</li>
                <li>Kontakt</li>
                <li>Reklamacje</li>
                <li>Pomoc</li>
              </ul>
              <ul>
                <li>Motoryzacja</li>
                <li>Elektronika</li>
                <li>Moda</li>
              </ul>
              <ul>
                <li>Dom</li>
                <li>Zwierzęta</li>
                <li>Sport</li>
              </ul>
            </div>
          </div>
          <p className="copyRight">Szymon Kuc - &copy; 2020</p>
      </section>
	);
}