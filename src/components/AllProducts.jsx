import React, { useEffect, useState } from 'react';
import { RiMessage2Fill } from "react-icons/ri";

export const AllProducts = ({ product, dispatch}) => {
	const displayModal = () => {
		dispatch({ type: 'SHOW_MODAL', payload: product })
	}

	return (
		<>
			<div key={`${product.name}-${product.id}-all`} className='bg-[#e2e9ee] text-fifth shadow-lg rounded-md'>
				<div className='w-full h-3/5 grid place-items-center'>
					<img src={product.img} alt="image product" className='w-28 h-28' onClick={displayModal} />
				</div>
				<div className='flex flex-col pl-6 justify-evenly h-2/5'>
					<h2 className='text-lg font-bold'>{product.name}</h2>
					<button className='w-4/5 h-10 flex justify-evenly place-items-center bg-third rounded-lg text-fourth tx-sm font-medium'>
						Cotizar
						<RiMessage2Fill />
					</button>
				</div>
			</div>
		</>

	)
}