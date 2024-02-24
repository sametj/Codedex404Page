import React from "react";
import "./UI.css";

function Footer() {
	return (
		<section className='footer'>
			<a
				href='https://www.codedex.io/home'
				target='_blank'
				rel='noreferrer'
				className='footer-link'>
				© 2021 Codédex
			</a>
			<span className='footer-text'>Made with in Brooklyn, NY </span>
		</section>
	);
}

export default Footer;
