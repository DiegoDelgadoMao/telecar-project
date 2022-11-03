import React from 'react';
import Reactimg from '@images/pasted-image-0-2.png';
import MenuMobile from '../components/menu-mobile';
const Home = () => {
    return(
		 <>
		<MenuMobile/>
			<h1>Hello world!</h1>
			<p>from React.js</p>
			<img src={Reactimg} />
		</>
    )
}

export default Home;