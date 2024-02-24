import React from "react";
import "./UI.css";
function UI() {
	return (
		<>
			<section className='header'>
				<img
					src='/coin-cropped.png'
					width='25px'
					height='28px'
					alt='coin logo'
					className='logo-image animate'
				/>
				<h1 className='logo-text'>Codédex</h1>
			</section>

			<section className='footer'>
				<span className='footer-text'>© 2021 Codédex</span>
				<span className='footer-text'>
					Made with <i class='nes-icon is-small heart'></i> in
					Brooklyn, NY
				</span>
			</section>
		</>
	);
}

export default UI;
