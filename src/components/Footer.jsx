import React from 'react';

import { RiPhoneLine, RiMailLine, RiCopyrightLine } from "react-icons/ri";
import logo from '../assets/images/logo.png'

export const Footer = () => {
	return (
		<footer className='bg-lime-200 flex flex-col py-7 gap-6'>
			<div className="pl-6">
				<h3 className='font-bold text-lg mb-6'>Contactenos</h3>
				<div className="font-light mb-5">
					<h4 className='flex items-center gap-2 mb-2 font-medium'>
						<RiPhoneLine className='w-5 h-5'/>
						Oficina Medellín:

					</h4>
					<p>(+57) (4) 612 9553 | 311 376 8543</p>
					<p>(+57) 310 478 4404</p>
				</div>
				<div className="font-light mb-5">
					<h4 className='flex items-center gap-2 mb-2 font-medium'>
						<RiPhoneLine className='w-5 h-5'/>
						Oficina Bogotá:
					</h4>
					<p>(+57) 310 478 4404</p>
				</div>
				<div className="font-light mb-5">
					<h4 className='flex items-center gap-2 mb-2 font-medium'>
						<RiMailLine className='w-5 h-5' />
						Correo electrónico:
					</h4>
					<p>(+57) 310 478 4404</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4">
				<img src={logo} className='w-44'/>
				<p className='flex gap-2 items-center font-bold'><RiCopyrightLine /> Copyright 2022 Telecar</p>
			</div>
		</footer>
	)
}