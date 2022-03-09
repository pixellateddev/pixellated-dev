import React from 'react';

function LoveHeartPin(props) {
	const title = props.title || "love heart pin";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#d96e6e">
		<path d="M17.977,3.233A9.422,9.422,0,0,0,11.81,1,9.261,9.261,0,0,0,5.741,3.493,8.8,8.8,0,0,0,3,10.194c.113,5.287,8.233,13.191,8.579,13.525a1,1,0,0,0,.7.281H12.3a1,1,0,0,0,.7-.311c.331-.348,8.11-8.589,8-13.877A8.806,8.806,0,0,0,17.977,3.233Zm-2.209,8L12,15,8.232,11.236A2.5,2.5,0,1,1,12,7.982a2.5,2.5,0,1,1,3.768,3.254Z" fill="#d96e6e"/>
	</g>
</svg>
	);
};

export default LoveHeartPin;