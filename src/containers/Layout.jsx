import React from 'react';
import Menu from './menu';
import { Footer } from '../components/Footer';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Menu />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;