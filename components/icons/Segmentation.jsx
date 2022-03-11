import React from 'react';

function Segmentation(props) {
	const title = props.title || "segmentation";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
		<line fill="none" x1="21" x2="23" y1="5" y2="5"/>
		<line fill="none" stroke="currentColor" x1="1" x2="17" y1="5" y2="5"/>
		<line fill="none" x1="3" x2="1" y1="12" y2="12"/>
		<line fill="none" stroke="currentColor" x1="23" x2="7" y1="12" y2="12"/>
		<line fill="none" x1="21" x2="23" y1="19" y2="19"/>
		<line fill="none" stroke="currentColor" x1="1" x2="17" y1="19" y2="19"/>
	</g>
</svg>
	);
};

export default Segmentation;