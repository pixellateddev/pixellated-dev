import React from 'react';

function Logout(props) {
	const title = props.title || "logout";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="currentColor">
		<path d="M17,22H5V2H17V4h2V1a.945.945,0,0,0-1-1H4A.945.945,0,0,0,3,1V23a.945.945,0,0,0,1,1H18a.945.945,0,0,0,1-1V20H17Z" fill="#59ffd1"/>
		<polygon points="22 12 15 6 15 11 8 11 8 13 15 13 15 18 22 12"/>
	</g>
</svg>
	);
};

export default Logout;