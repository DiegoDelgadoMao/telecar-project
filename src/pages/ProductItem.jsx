import React  from 'react';
// import '@styles/produc.scss';

const OrderDetail =({ product }) => {
    return(
		<div className='produc-Container'>
				<div className='upart'>
					<h2>{product.name}</h2>
					<img src={product.img} alt="" />
				</div>
				<div>
					<p className='cost'>{product.cost}</p>
					<p className='description'>{product.description}</p>
				</div>
			</div>
    )
}
export default OrderDetail;