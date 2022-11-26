import React from 'react';
import {docgetdata} from '../firebase.js';
// import Reactimg from '@images/pasted-image-0-2.png';

const Home = () => {
	let dato;
	 const saludar = async () => {
		console.log('hola')
		const data = await docgetdata('USxQSJnXigCUA7Ir8Zhc')
		console.log(data.cost)
		dato = data.cost;
		
	}
	window.addEventListener('DOMContentLoaded',saludar())
	return (
		<>
			<h1>Hello world!</h1>
			<div className='produc-Container'>
				<div>
					<img src="#" alt="" />
				</div>
				<div>
					<p className='cost'>${dato}</p>
					<p className='description'>{}</p>
				</div>
			</div>
		</>
	)
}

export default Home;