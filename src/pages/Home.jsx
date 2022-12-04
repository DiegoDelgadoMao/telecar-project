import React, { useEffect, useState } from 'react';
import { getAllproducts } from '../firebase.js';
import {OrderDetail} from '../components/ProductItem.jsx';


const Home = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getData() {
			const response = await getAllproducts();
			const data = [];
			response.forEach(doc => data.push(doc.data()))
			setLoading(!loading)
			setProducts(data)
		}
		getData();
	}, [])
	return (
		<>
			{
				(loading)
					? <p>loading data...</p>
					: <div>
						{products.map((product, index) => (
							<OrderDetail product={product} key={index} />
						))}
					</div>
			}
		</>
	)
}

export default Home;