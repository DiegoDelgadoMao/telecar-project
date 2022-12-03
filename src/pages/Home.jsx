import React, { useEffect, useState} from 'react';
import {getProduct,getAllproducts,getUpdateProducts} from '../firebase.js';
import '@styles/produc.scss'
import OrderDetail from './ProductItem.jsx';
// import Reactimg from '@images/pasted-image-0-2.png';

const Home = () => {
	const [products,setProducts] = useState([])
    
	useEffect(()=>{
		async function getData(){
			const get = await getAllproducts();
			const getProduct = []
		 get.forEach(async doc=>{
				getProduct.push(doc.data())
				await setProducts(getProduct)
			})
			console.log(getProduct)
		}
			getData();
			
		},[])
	return (
		<>
			<h1>Hello world!</h1>
			<div>
				{products.map((product, index) => (
					<OrderDetail product={product} key={index}/>
				))}
			</div>
		</>
	)
}

export default Home;