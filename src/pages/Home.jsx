import React, { useEffect, useState} from 'react';
import {getProduct,getAllproducts,getUpdateProducts} from '../firebase.js';
import '@styles/produc.scss'
import OrderDetail from './ProductItem.jsx';
// import Reactimg from '@images/pasted-image-0-2.png';

const Home = () => {
	 const [products, setProducts] = useState()
	useEffect(()=>{
		async function getData(){
			const get = await getAllproducts();
			get.forEach(doc => {
				const data = doc.data();
				console.log(data)})
		}
		getData();
	},[])

	return (
		<>
			<h1>Hello world!</h1>
			{}
		</>
	)
}

export default Home;