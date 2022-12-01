import React, { useEffect, useState } from 'react';
import { getProduct, getAllproducts, getUpdateProducts } from '../firebase.js';
import '@styles/produc.scss'
import OrderDetail from './ProductItem.jsx';

const Home = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		async function getData() {
			const query = await getAllproducts();
			const mainProducts = []

			query.forEach(doc => {
				mainProducts.push(doc.data())
				setProducts(mainProducts)
			})
		}
		console.log(products)
		getData();
	}, [])

	return (
		<>
			<section className='container-products'>
				{
					products.map((item, index) => (
						<div className='product' key={`${item.name}-${index}`}>
							<h2>{item.name}</h2>
							<p>{item.description}</p>
							<h3>{item.cost}</h3>
							<img src="{item.img}" alt="" />
						</div>
					))
				}
			</section>

		</>
	)
}

export default Home;