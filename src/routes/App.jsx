import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';

const App = () => {
	return (
	<BrowserRouter>
	<Layout>
		<Routes>
			<Route exact path="/" element={<Home/>} />
		</Routes>
	</Layout>
	</BrowserRouter>
	)
}

export default App