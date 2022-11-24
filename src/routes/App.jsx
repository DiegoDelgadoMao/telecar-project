import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';

import { Us } from '../pages/Us';
import { Services } from '../pages/Services'

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/nosotros" element={<Us />} />
					<Route exact path="/servicios" element={<Services />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App