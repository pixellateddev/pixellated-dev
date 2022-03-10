import React from 'react';

function Letter(props) {
	const title = props.title || "letter";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<title>{title}</title>
			<g fill="#d96e6e">
				<path d="M13.4,14.6A2.3,2.3,0,0,1,12,15a2.3,2.3,0,0,1-1.4-.4L0,8.9V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V8.9Z" fill="#d96e6e"/>
				<path d="M21,2H3A3,3,0,0,0,0,5V6a1.05,1.05,0,0,0,.5.9l11,6a.9.9,0,0,0,.5.1.9.9,0,0,0,.5-.1l11-6A1.05,1.05,0,0,0,24,6V5A3,3,0,0,0,21,2Z"/>
			</g>
		</svg>
	);
};

export default Letter;