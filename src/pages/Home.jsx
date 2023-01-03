import React, { useEffect, useState, useReducer } from 'react';

import { AllProducts } from '../components/AllProducts';

import { Loading } from '../components/Loading.jsx';
import { Searcher } from '../components/Searcher.jsx';

import { RiFireFill, RiDashboardFill } from "react-icons/ri";
import AppSlider from '../components/swiper';

import { ModalInfo } from '../components/ModalInfo.jsx';
import { Brands } from '../components/Brands.jsx';

import { useProducts } from '../hooks/useProducts';

const Home = () => {
	const hook = useProducts()

	useEffect(() => {
		console.log('data from Home component',hook)
	}, [])

	if (true) {
		return <Loading />
	} else {
		return (
			<>
				{
					(state.modalInfo)
						? <ModalInfo product={state.productModal} dispatch={dispatch} />
						: ''
				}

				<AppSlider />

				<section className='w-10/12 mx-auto'>
					<h2 className='sub-titles txt-fifth'>
						<RiFireFill />
						Destacados
					</h2>
					<div className='grilla-products'>
						{state.outstading.map((product) => (
							<AllProducts product={product} dispatch={dispatch} />
						))}

					</div>
				</section>

				<Brands/>

				<Searcher />

				<section className='w-10/12 mx-auto mb-10'>
					<h2 className='sub-titles txt-fifth'>
						<RiDashboardFill />
						Todos los productos
					</h2>
					<div className='grilla-products'>
						{
							state.mainProducts.map((product) => (
								<AllProducts product={product} dispatch={dispatch} />
							))
						}
					</div>
				</section>

				<section className='w-10/12 mx-auto mb-10'>
					<h2 className='sub-titles txt-fifth'>
						<RiDashboardFill />
						Productos Motorola
					</h2>
					<div className='grilla-products'>
						{
							state.mainProducts.map((product) => (
								<AllProducts product={product} dispatch={dispatch} />
							))
						}
					</div>
				</section>
			</>
		)
	}
}

export default Home;