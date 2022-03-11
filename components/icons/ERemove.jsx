import React from 'react';

function ERemove(props) {
	const title = props.title || "e remove";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#59ffd1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
		<line fill="none" stroke="currentColor" x1="51.092" x2="12.908" y1="12.908" y2="51.092"/>
		<line fill="none" stroke="currentColor" x1="51.092" x2="12.908" y1="51.092" y2="12.908"/>
	</g>
</svg>
	);
};

export default ERemove;