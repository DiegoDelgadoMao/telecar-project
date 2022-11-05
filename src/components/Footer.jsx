import React from 'react';

import { RiPhoneLine, RiMailLine, RiCopyrightLine } from "react-icons/ri";
import logo from '../assets/images/logo.png'

export const Footer = () => {
	return (
		<footer>
			<div className="contact">
				<h3>Contactenos</h3>
				<div className="contact-number">
					<h4>
						<RiPhoneLine />
						Oficina Medellín:

					</h4>
					<p>(+57) (4) 612 9553 | 311 376 8543</p>
					<p>(+57) 310 478 4404</p>
				</div>
				<div className="contact-number">
					<h4>
						<RiPhoneLine />
						Oficina Bogotá:
					</h4>
					<p>(+57) 310 478 4404</p>
				</div>
				<div className="contact-mail">
					<h4>
						<RiMailLine />
						Correo electrónico:
					</h4>
					<p>(+57) 310 478 4404</p>
				</div>
			</div>
			<div className="another">
				<img src={logo} />
				<p><RiCopyrightLine /> Copyright 2022 Telecar</p>
			</div>
		</footer>
	)
}