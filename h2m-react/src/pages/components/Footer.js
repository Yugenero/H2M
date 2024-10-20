import React from 'react';

function Footer() {
return (
	<div>
		<footer className="bg-black text-white p-4">
			<div className="container mx-auto flex justify-start">
				<div className="flex flex-col text-left">
					<span><strong>About us</strong></span>
					<a className="hover:underline" href='https://www.sanchezriveralab.com/'>Sánchez-Rivera Lab</a>
					<span><a className='hover:underline' href='https://ki.mit.edu/'>Koch Institute for Integrative Cancer Research</a> @ MIT </span>
					<a className='hover:underline' href='https://mit.edu'>Massachusetts Institute of Technology</a>
				</div>
			</div>
		</footer>
		<div className="bg-gray-900 text-white p-2 text-center">
			<div className='container mx-auto flex justify-start'>
				<span className='text-xs'>Copyright © 2024 Sánchez-Rivera Lab</span>
			</div>
		</div>
	</div>
);
}

export default Footer;