import React, { useEffect, useState } from 'react';
import { getAllproducts } from '../firebase.js';
import { OrderDetail } from '../components/ProductItem.jsx';
import { OutstadingProducts } from '../components/OutstadingProducts.jsx';
import { Searcher } from '../components/Searcher.jsx';

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
			console.log(data)
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
				<div className='grid grid-flow-col gap-3 auto-cols-[minmax(240px,250px)] auto-rows-[160px] overflow-x-auto overscroll-x-contain px-2 py-4'>
					{outstading.map((product) => (
						<OutstadingProducts product={product}/>
					))}
				</div>
			</section>

			<Searcher />

			<section className='w-10/12 mx-auto mb-10'>
				<h2 className='sub-titles txt-fifth'>
					<RiDashboardFill />
					Todos los productos
				</h2>
				<div className='w-full grid grid-cols-allproducts gap-4 auto-rows-[250px] justify-center'>
					{
						products.map((product) => (
							<OrderDetail product={product} />
						))
					}
				</div>
			</section>
			
		</>
	)
}

export default Home;