import React, { useEffect, useState, useReducer } from 'react';

import { getAllproducts } from '../firebase.js';

import { AllProducts } from '../components/AllProducts';

import { Loading } from '../components/Loading.jsx';
import { Searcher } from '../components/Searcher.jsx';

import { RiFireFill, RiDashboardFill } from "react-icons/ri";
import AppSlider from '../components/swiper';

import { reducer, initialState } from '../reducers/index.js';

import { ModalInfo } from '../components/ModalInfo.jsx';

const Home = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		async function getData() {
			const response = await getAllproducts();
			const data = [];
			response.forEach(doc => data.push(doc.data()))

			dispatch({ type: 'LOADED' })
			dispatch({type: 'CHANGE_PRODUCTS', payload: data})

			let newOutstading = []
			for (let i = 0; i < 5; i++) {
				newOutstading.push(data[i])
			}
			dispatch({type: 'CHANGE_OUTSTADING', payload: newOutstading})
			console.log(data)
		}
		getData();
	}, [])

	if (state.loading) {
		return <Loading/>
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
					<div className='grid grid-flow-col gap-3 auto-cols-[minmax(180px,200px)] auto-rows-[250px] overflow-x-auto overscroll-x-contain px-2 py-4'>
						{state.outstading.map((product) => (
							console.log(product),
							<AllProducts product={product} dispatch={dispatch}/>
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
							state.mainProducts.map((product) => (
								<AllProducts product={product} dispatch={dispatch}/>
							))
						}
					</div>
				</section>
			</>
		)
	}
}

export default Home;