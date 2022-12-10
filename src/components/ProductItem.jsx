import React from 'react';
import { RiShoppingCart2Fill } from "react-icons/ri";

export const OrderDetail = ({ product }) => {
	return (
		<div key={`${product.name}-${product.id}-all`} className='bg-[#e2e9ee] text-fifth shadow-lg rounded-md'>
			<div className='w-full h-2/4 grid place-items-center'>
				<img src={product.img} alt="image product" className='w-28 h-28' />
			</div>
			<div className='flex flex-col pl-6 gap-1 mt-2 h-2/4'>
				<p className='text-xl font-black'>${product.cost}</p>
				<h2 className='text-xs font-normal'>{product.name}</h2>
				<button className='w-4/5 h-10 flex justify-evenly place-items-center bg-third rounded-lg mt-1 text-fourth'>
					comprar
					<RiShoppingCart2Fill />
				</button>
			</div>

		</div>
	)
}