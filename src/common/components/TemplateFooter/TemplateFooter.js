import React from 'react'

import { Container } from 'common/components/Container/index.js'

// I'll break these into components as I build them. This is just a placeholder for now.
export const TemplateFooter = () => (
  <>
  <Container>
    <aside className="discoverBanner">Discover your neighbourhood store at your door.</aside>
    <aside className="newsletter">SIGN UP for our newsletter and be the first to hear about special offers and events.</aside>
    <footer>
      <ul>
			  <li>About Us</li>
				<li>How It Works</li>
				<li>The Grocery Gateway Story</li>
				<li>Longo's</li>
				<li>Longo's Thank You Rewards</li>
				<li>Sustainability</li>
				<li>Careers</li>
				<li>Contact Us</li>
			</ul>

      <p>© 2019 LONGO BROTHERS FRUIT MARKET INC. ALL RIGHTS RESERVED.</p>
    </footer>
  </Container>
  </>
)
