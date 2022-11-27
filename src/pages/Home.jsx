import React, { useEffect, useState} from 'react';
import {docgetdata} from '../firebase.js';
import '@styles/produc.scss'
// import Reactimg from '@images/pasted-image-0-2.png';

const Home = () => {
	const [ cost, setCost ] = useState(0);
	const [ desc, setdesc ] = useState('');
	const [ img, setimg ] = useState('');
	const [ name, setname ] = useState('');

	useEffect(()=>{
		async function getData(){
		const dat =  await docgetdata('USxQSJnXigCUA7Ir8Zhc');
		setCost(cost + dat.cost)
		setdesc(desc + dat.description)
		setimg(img + dat.img)
		setname(name + dat.name)
	    }
       getData();
	},[])

	return (
		<>
			<h1>Hello world!</h1>
			<div className='produc-Container'>
				<div className='upart'>
					<h2>{name}</h2>
					<img src={img} alt="" />
				</div>
				<div>
					<p className='cost'>{cost}</p>
					<p className='description'>{desc}</p>
				</div>
			</div>
		</>
	)
}

export default Home;