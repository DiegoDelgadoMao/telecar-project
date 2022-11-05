import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';

import { Us } from '../pages/Us';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/nosotros" element={<Us />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App