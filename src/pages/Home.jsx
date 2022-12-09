import React, { useEffect, useState } from 'react';
import { getAllproducts } from '../firebase.js';
import { OrderDetail } from '../components/ProductItem.jsx';

import "../styles/swiper.css";

import { RiFireFill, RiDashboardFill } from "react-icons/ri";
import Appswiperjs from '../swiper.jsx';
import AppSlider from '../swiper.jsx';


const Home = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [outstading, setOutstading] = useState([])

	useEffect(() => {
		async function getData() {
			const response = await getAllproducts();
			const data = [];
			response.forEach(doc => data.push(doc.data()))
			setLoading(!loading)
			setProducts(data)

			let newOutstading = []
			for (let i = 0; i < 5; i++) {
				newOutstading.push(data[i])
			}
			setOutstading(newOutstading)
		}
		getData();
	}, [])
	return (
		<>
		    <AppSlider/>
			<section className='w-10/12 mx-auto'>
				<h2 className='sub-titles txt-fifth'>
					<RiFireFill />
					Destacados
				</h2>
				<div className='py-2 grid grid-cols-outstading auto-rows-[240px] max-w-7xl overflow-x-auto gap-5'>
					{outstading.map((product, index) => (
						<OrderDetail product={product} key={index} />
					))}
				</div>
			</section>
			<section className='w-10/12 mx-auto'>
				<h2 className='sub-titles txt-fifth'>
					<RiDashboardFill />
					Todos los productos
				</h2>
				<div className='w-full grid grid-cols-[repeat(auto-fit, minmax(180px,190px))]'></div>
			</section>
			
		</>
	)
}

export default Home;