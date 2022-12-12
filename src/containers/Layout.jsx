import React from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';

const Layout = ({ children }) => {
	return (
		<div className="bg-background relative">
			<Menu />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;